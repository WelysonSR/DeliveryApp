import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';
import NavBar from '../../components/NavBar';
import * as S from './styles';
import Table from './Table';
import { patchStatusAxios, salesIdAxios } from '../../utils/axios';

export default function SellerOrderDetails() {
  const [details, setDetails] = useState(null);
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Pendente');
  const { id: paramsId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const { data } = await salesIdAxios(paramsId);
      setDetails(data);
      const momentDate = moment(data.saleDate);
      setDate(momentDate.format('DD/MM/YYYY'));
      setStatus(data.status);
    };
    getDetails();
  }, [paramsId]);
  // return (<div> oi</div>);

  const changeStatus = async (id, param) => {
    await patchStatusAxios(id, param);
    setStatus(param);
  };

  if (!details) {
    return (
      <>
        <NavBar />
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <S.Main>
        <S.CheckoutCointainer>
          <section>
            <h2>Detalhe do Pedido</h2>
            <Table details={ details } />
            <p
              className="fs-4 fw-light"
              data-testid="seller_order_details__element-order-total-price"
            >
              {`Total: R$ ${details.totalPrice.toString().replace('.', ',')}`}
            </p>

          </section>

          <div
            data-testid="seller_order_details__element-order-details-label-order-id"
            className="mb-5 bg-body-tertiary rounded"
          >
            <p>{ `Pedido ${paramsId}` }</p>
            <h4
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              { date }
            </h4>
            <h2
              data-testid="seller_or
            der_details__element-order-details-label-delivery-status"
            >
              { status }
            </h2>
            <button
              data-testid="seller_order_details__button-preparing-check"
              onClick={ () => changeStatus(paramsId, 'Preparando') }
              disabled={ status !== 'Pendente' }
              type="button"
              className="btn btn-danger"
            >
              PREPARAR PEDIDO
            </button>
            <button
              data-testid="seller_order_details__button-dispatch-check"
              onClick={ () => changeStatus(paramsId, 'Em Trânsito') }
              disabled={ status !== 'Preparando' }
              type="button"
              className="btn btn-danger"
              z
            >
              SAIU PARA ENTREGA
            </button>
          </div>

        </S.CheckoutCointainer>
      </S.Main>
    </>
  );
}
