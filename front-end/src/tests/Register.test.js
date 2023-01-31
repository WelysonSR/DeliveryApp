import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderRouter';
import Register from '../pages/Register';

describe('Testa funcionalidade da tela register', () => {
  let history;
  beforeEach(() => {
    history = renderWithRouter(<Register />).history;
  });

  it('Testa se a página de register está na rota /register', () => {
    expect(history.location.pathname).toBe('/register');
  });

  it('Verifica se tem quatro input na tela ', () => {
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
