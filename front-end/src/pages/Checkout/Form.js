import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAxios, registerSalesAxios } from '../../utils/axios';

function Form() {
  const [seller, setSeller] = useState([]);
  const [address, setAddress] = useState('');
  const [api, setApi] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  const cart = useSelector(({ products }) => products.checkout);

  useEffect(() => {
    const getAxios = async () => {
      try {
        const { data } = await getUserAxios();
        const result = data.filter((u) => u.role === 'seller');
        setApi(result);
      } catch (err) {
        console.log(err);
      }
    };
    getAxios();
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const history = useHistory();

  const postAxios = async () => {
    try {
      const obj = {
        products: cart.filter((product) => product.quantity > 0),
        userId: Number(user.id),
        sellerId: Number(seller.id) || Number(api[0].id),
        totalPrice: Number(totalPrice.replace(',', '.')),
        deliveryAddress: address,
        deliveryNumber: Number(number),
      };
      const { data } = await registerSalesAxios(obj);
      const url = `/customer/orders/${data.id}`;
      history.push(url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getTotalPrice = () => {
      const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
      setTotalPrice(total.toFixed(2).replace('.', ','));
    };

    getTotalPrice();
  }, [cart]);

  return (
    <form>
      <h4> Detalhes e Endereço para Entrega </h4>
      <p
        className="fs-4 fw-light"
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: R$ ${totalPrice}`}
      </p>
      <label htmlFor="vendedora" className="form-label">
        P. Vendedora Responsável:
        <select
          id="vendedora"
          className="form-select"
          data-testid="customer_checkout__select-seller"
          onChange={ ({ target }) => setSeller(target.value) }
          value={ api[0] }
        >
          { api.map((e, index) => (
            <option
              key={ index }
              value={ e }
            >
              {e.name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="endereço" className="form-label">
        Endereço:
        <input
          className="form-control"
          type="text"
          id="endereço"
          placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          data-testid="customer_checkout__input-address"
          value={ address }
          onChange={ ({ target }) => setAddress(target.value) }
        />
      </label>

      <label htmlFor="address" className="form-label">
        Número:
        <input
          className="form-control"
          type="text"
          id="address"
          placeholder="198"
          data-testid="customer_checkout__input-address-number"
          onChange={ ({ target }) => setNumber(target.value) }
          value={ number }
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ postAxios }
        className="btn btn-outline-success"
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}

export default Form;
