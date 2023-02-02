import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import axios from 'axios';
import renderWithRouter from './RenderRouter';
import App from '../App';

describe('Testa funcionalidade da tela produtos', () => {
  let history;
  beforeEach(() => {
    history = renderWithRouter(<App />).history;
    jest.spyOn(axios, 'post');
  });

  afterEach(() => { jest.clearAllMocks(); });

  it('Testa se a página de register está na rota /customer/products', () => {
    history.push('/customer/products');

    expect(history.location.pathname).toBe('/customer/products');
  });
});
