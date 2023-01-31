import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderRouter';
import Login from '../pages/Login';

describe('Testa funcionalidade da tela login', () => {
  let history;
  beforeEach(() => {
    history = renderWithRouter(<Login />).history;
  });

  it('Testa se a página de login está na rota /', () => {
    expect(history.location.pathname).toBe('/');
  });

  it('Verifica se tem três input na tela ', () => {
    const input1 = screen.getByTestId('common_login__input-email');
    const input2 = screen.getByTestId('common_login__input-password');
    const input3 = screen.getByTestId('common_login__element-invalid-email');
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();
  });

  it('Verifica se tem dois botões na tela', () => {
    const button1 = screen.getByTestId('common_login__button-login');
    const button2 = screen.getByTestId('common_login__button-register');
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });

  it(
    'Testa se ao clicar no botão Não tenho, é redirecionado para página de registro',
    () => {
      history.push('/login');
      const btn1 = screen.getByRole('button', { name: /Ainda não tenho conta/i });
      expect(btn1).toBeInTheDocument();
      userEvent.click(btn1);
      const { pathname } = history.location;
      expect(pathname).toBe('/register');
    },
  );
});
