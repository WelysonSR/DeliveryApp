import { combineReducers } from 'redux';
import login from './login';
import products from './products';

const rootReducer = combineReducers({ login, products });

export default rootReducer;
