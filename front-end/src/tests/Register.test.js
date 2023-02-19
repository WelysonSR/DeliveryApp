import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import renderWithRouter from './helpers/RenderRouter';
import App from '../App';

describe('Testa funcionalidade da tela register', () => {
  let history;
  beforeEach(() => {
    history = renderWithRouter(<App />).history;
    jest.spyOn(axios, 'post');
  });

  afterEach(() => { jest.clearAllMocks(); });

  it('Testa se a página de register está na rota /register', () => {
    history.push('/register');

    expect(history.location.pathname).toBe('/register');
  });

  it('Verifica se tem quatro input na tela ', () => {
    history.push('/register');

    const inputName = screen.getByTestId('common_register__input-name');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    const inputInvalid = screen.getByTestId('common_register__element-invalid_register');

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputInvalid).toBeInTheDocument();
  });

  it('Verifica se tem um botão na tela', () => {
    history.push('/register');

    const btnRegister = screen.getByTestId('common_register__button-register');
    expect(btnRegister).toBeInTheDocument();
  });

  it(
    'Testa se ao clicar no botão CADASTRAR, é redirecionado para página de produtos',
    () => {
      history.push('/register');

      const btn = screen.getByRole('button', { name: /CADASTRAR/i });
      expect(btn).toBeInTheDocument();
      userEvent.click(btn);
      const { pathname } = history.location;
      expect(pathname).toBe('/customer/products');
    },
  );
});
