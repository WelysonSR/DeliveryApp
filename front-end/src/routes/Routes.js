import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';
import Products from '../pages/Products';
import OrderDetails from '../pages/OrderDetails';

function Routes() {
  return (
    <div className="meals">
      <Switch>
        <Route
          exact
          path="/"
        >
          <Redirect to="login" />
        </Route>

        <Route
          path="/login"
          render={ (props) => <Login { ...props } /> }
        />
        <Route
          path="/register"
          component={ Register }
        />
        <Route
          path="/customer/orders/:id"
          component={ OrderDetails }
        />
        <Route
          path="/customer/orders"
          component={ Orders }
        />
        <Route
          path="/customer/checkout"
          component={ Checkout }
        />
        <Route
          path="/customer/products"
          component={ Products }
        />
      </Switch>
    </div>
  );
}

export default Routes;
