import React from 'react';
import Navbar from '../../components/NavBar';
import OrderTable from '../../components/OrderTable';
import * as S from './styles';
import Form from './Form';

export default function Checkout() {
  return (
    <>
      <Navbar />
      <S.Main>
        <S.CheckoutCointainer>
          <section>
            <OrderTable />
          </section>
          <Form />
        </S.CheckoutCointainer>
      </S.Main>
    </>
  );
}
