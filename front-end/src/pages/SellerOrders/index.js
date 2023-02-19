import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import SellerOrdersCard from '../../components/SellerOrdersCard';
import * as S from './styles';
import { getSalesAxios } from '../../utils/axios';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const { data } = await getSalesAxios();
      const filter = data.filter((sale) => sale.sellerId === user.id);
      setSales(filter);
    };
    getSales();
  }, []);

  return (
    <>
      <NavBar />
      <S.Main>
        <S.OrdersCointainer>
          {
            sales.map(({
              id,
              status,
              saleDate,
              totalPrice,
              deliveryAddress,
              deliveryNumber,
            }) => (
              <SellerOrdersCard
                key={ id }
                id={ id }
                status={ status }
                saleDate={ saleDate }
                totalPrice={ totalPrice }
                deliveryAddress={ deliveryAddress }
                deliveryNumber={ deliveryNumber }
              />
            ))
          }
        </S.OrdersCointainer>
      </S.Main>
    </>
  );
}
