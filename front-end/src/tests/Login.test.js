import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import api from './helpers/api';
import renderWithRouter from './helpers/RenderRouter';
import App from '../App';

describe('Testa funcionalidade da tela login', () => {
  let history;
  beforeEach(() => {
    history = renderWithRouter(<App />).history;
    jest.spyOn(api, 'post');
  });

  afterEach(() => { jest.clearAllMocks(); });

  it('Testa se o botão é desativado com os inputs vazios', async () => {
    history.push('/login');

    const btnLogin = await screen.getByTestId('common_login__button-login');
    expect(btnLogin).toHaveAttribute('disabled');
  });

  it('Testa se a página de login está na rota /', () => {
    history.push('/login');

    expect(history.location.pathname).toBe('/');
  });

  it('Verifica se tem três input na tela ', () => {
    history.push('/login');

    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const inputInvalid = screen.getByTestId('common_login__element-invalid-email');

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputInvalid).toBeInTheDocument();
  });

  it('Verifica se tem dois botões na tela', () => {
    history.push('/login');

    const btnLogin = screen.getByTestId('common_login__button-login');
    const btnRegister = screen.getByTestId('common_login__button-register');

    expect(btnLogin).toBeInTheDocument();
    expect(btnRegister).toBeInTheDocument();
  });

  it(
    'Testa se ao clicar no botão Não tenho, é redirecionado para página de registro',
    () => {
      history.push('/login');

      const btnRegister = screen.getByRole('button', { name: /Ainda não tenho conta/i });
      expect(btnRegister).toBeInTheDocument();
      userEvent.click(btnRegister);

      const { pathname } = history.location;
      expect(pathname).toBe('/register');
    },
  );
});
