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
    const input1 = screen.getByTestId('common_register__input-name');
    const input2 = screen.getByTestId('common_register__input-email');
    const input3 = screen.getByTestId('common_register__input-password');
    const input4 = screen.getByTestId('common_register__element-invalid_register')
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();
    expect(input4).toBeInTheDocument();
  });

  it('Verifica se tem um botão na tela', () => {
    const button1 = screen.getByTestId('common_register__button-register');
    expect(button1).toBeInTheDocument();
  });

  it(
    'Testa se ao clicar no botão CADASTRAR, é redirecionado para página de produtos',
    () => {
      history.push('/register');
      const btn1 = screen.getByRole('button', { name: /CADASTRAR/i });
      expect(btn1).toBeInTheDocument();
      userEvent.click(btn1);
      const { pathname } = history.location;
      expect(pathname).toBe('/customer/products');
    },
  );
});
