import PropTypes from 'prop-types';
import React from 'react';

function Table({ details }) {
  return (
    <table className="grid gap-3 text-center table table-light table-sm rounded">
      <thead className="table-danger">
        <tr>
          <th className="col px-md-4">Item</th>
          <th className="col px-md-5">Descrição</th>
          <th className="col px-md-4">Qtd</th>
          <th className="col px-md-4">Unitário</th>
          <th className="col px-md-4">Total</th>
        </tr>
      </thead>

      <tbody>
        { details && details
          .products.map(({ id, name, salesProduct, price }, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index}`
                }
              >
                { id }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${index}`
                }
              >
                { name }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                { salesProduct.quantity }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                <span>R$ </span>
                { price.toString().replace('.', ',') }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }
              >
                <span>R$ </span>
                { (Number(price) * Number(salesProduct.quantity)).toFixed(2)
                  .toString().replace('.', ',') }
              </td>
            </tr>
          ))}
      </tbody>
    </table>

  );
}

Table.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.number,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.string,
}.isRequired;

export default Table;
