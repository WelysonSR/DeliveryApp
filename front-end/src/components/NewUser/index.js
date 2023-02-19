import { useEffect, useState } from 'react';
import * as EmailValidator from 'email-validator';
import { useDispatch } from 'react-redux';
import { users as userRedux } from '../../redux/reducer/login';
import * as S from './styles';
import { registerAdmAxios, getUserAxios } from '../../utils/axios';

export default function NewUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [validate, setvalidate] = useState(false);
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  const handleClick = async (event) => {
    event.preventDefault();
    const register = { name, email, password, role };

    try {
      await registerAdmAxios(register);
      setCounter(counter + 1);
    } catch (err) {
      setvalidate(true);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getUserAxios();
      dispatch(userRedux(data));
    };
    getUser();
  }, [counter, dispatch]);

  useEffect(() => {
    const validation = () => {
      const characterSix = 6;
      const characterTwelve = 12;
      const inputEmail = EmailValidator.validate(email);
      const inputName = name.length >= characterTwelve;
      const inputPassword = password.length >= characterSix;
      return (inputEmail && inputName && inputPassword);
    };
    setDisabledBtn(validation());
  }, [name, email, password]);

  return (
    <S.Container className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <h1>Cadastro de Usuário</h1>
      <input
        className="form-control"
        type="text"
        name="name"
        placeholder="Name e sobrenome"
        data-testid="admin_manage__input-name"
        onChange={ ({ target }) => setName(target.value) }
      />
      <input
        className="form-control"
        type="email"
        name="email"
        placeholder="Email"
        data-testid="admin_manage__input-email"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        className="form-control"
        type="password"
        name="password"
        placeholder="Password"
        data-testid="admin_manage__input-password"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <select
        className="form-select"
        data-testid="admin_manage__select-role"
        name="role"
        onChange={ ({ target }) => setRole(target.value) }
        value={ role }
      >
        <option value="administrator">Administrator</option>
        <option value="seller" selected="selected">Vendedor</option>
        <option value="customer">Cliente</option>
      </select>
      <button
        type="submit"
        data-testid="admin_manage__button-register"
        onClick={ handleClick }
        disabled={ !disabledBtn }
        className="btn btn-danger"
      >
        CADASTRAR
      </button>
      { validate
        && (
          <p data-testid="admin_manage__element-invalid-register">
            Já existe este cadastro
          </p>
        ) }
    </S.Container>
  );
}
