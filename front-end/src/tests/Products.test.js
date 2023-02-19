import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as axios from 'axios';
import renderWithRouter from './helpers/RenderRouter';
import App from '../App';

const costumerLink = '/customer/products';

describe('Testa funcionalidade da tela produtos', () => {
  let history;
  beforeEach(() => {
    history = renderWithRouter(<App />).history;
    jest.spyOn(axios, 'post');
  });

  afterEach(() => { jest.clearAllMocks(); });

  it('Testa se a página de products está na rota /customer/products', () => {
    history.push(costumerLink);

    expect(history.location.pathname).toBe(costumerLink);
  });

  it('Testa se é possível adicionar e remover produtos do carrinho', () => {
    history.push(costumerLink);

    const quantity = screen
      .getByTestId('customer_products__input-card-quantity-1');
    expect(quantity.value).toBe('0');

    const btnAdd = screen
      .getByTestId('customer_products__button-card-add-item-1');
    userEvent.click(btnAdd);
    expect(quantity.value).toBe('2');

    const btnRemove = screen
      .getByTestId('customer_products__button-card-rm-item-1');
    userEvent.click(btnRemove);
    expect(quantity.value).toBe('1');
  });

  it('Testa se não é possível ter um número negativo de items', () => {
    history.push('/customer/products');

    const quantity = screen
      .getByTestId('customer_products__input-card-quantity-1');
    expect(quantity.value).toBe('0');

    const btnRemove = screen
      .getByTestId('customer_products__button-card-rm-item-1');
    userEvent.click(btnRemove);
    expect(quantity.value).toBe('0');

    userEvent.type(quantity, '-1');
    expect(quantity.value).toBe('0');
  });

  it('Testa se é possível fazer logout', () => {
    history.push(costumerLink);

    const btnlogout = screen
      .getByTestId('customer_products__element-navbar-link-logout');
    userEvent.click(btnlogout);

    screen.getByTestId('common_login__input-email');
    expect(history.location.pathname).toBe('/login');
  });
});
