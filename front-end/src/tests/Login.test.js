import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import axios from 'axios';
import renderRouter from './RenderRouter';
import App from '../App';
import Login from '../pages/Login';

describe('Testa página de login', () => {
  it('Testa se o botão é desativado com os inputs vazios', async () => {
    const { history } = renderRouter(<App />);
    history.push('/login');

    const btnLogin = await screen.getByTestId('common_login__button-login');
    expect(btnLogin).toHaveAttribute('disabled');
  });

  it('Testa se a página de login está na rota /', () => {
    const { history } = renderRouter(<App />);
    history.push('/login');

    expect(history.location.pathname).toBe('/');
  });

  it('Verifica se tem três input na tela ', () => {
    const { history } = renderRouter(<Login />);
    history.push('/login');

    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const inputInvalid = screen.getByTestId('common_login__element-invalid-email');

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputInvalid).toBeInTheDocument();
  });

  it('Verifica se tem dois botões na tela', () => {
    const { history } = renderRouter(<Login />);
    history.push('/login');

    const btnLogin = screen.getByTestId('common_login__button-login');
    const btnRegister = screen.getByTestId('common_login__button-register');

    expect(btnLogin).toBeInTheDocument();
    expect(btnRegister).toBeInTheDocument();
  });

  it(
    'Testa se ao clicar no botão Não tenho, é redirecionado para página de registro',
    () => {
      const { history } = renderRouter(<App />);
      history.push('/login');

      const btnRegister = screen.getByRole('button', { name: /Ainda não tenho conta/i });
      expect(btnRegister).toBeInTheDocument();
      userEvent.click(btnRegister);

      const { pathname } = history.location;
      expect(pathname).toBe('/register');
    },
  );
});
