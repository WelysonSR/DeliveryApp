import React, { useState, useEffect } from 'react';
import MyOrder from '../../components/MyOrder';
import NavBar from '../../components/NavBar';
import * as S from './styles';
import { getSalesAxios } from '../../utils/axios';

export default function Orders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const { data } = await getSalesAxios();
      const user = JSON.parse(localStorage.getItem('user'));
      const filtered = data.filter((sale) => Number(sale.userId) === Number(user.id));
      setSales(filtered);
    };
    getSales();
  }, []);

  return (
    <>
      <NavBar />
      <S.Main>
        <S.OrdersCointainer>
          {
            sales.map(({ id, status, saleDate, totalPrice }) => (
              <MyOrder
                key={ id }
                id={ id }
                status={ status }
                data={ saleDate }
                price={ totalPrice }
              />
            ))
          }
        </S.OrdersCointainer>
      </S.Main>
    </>
  );
}
