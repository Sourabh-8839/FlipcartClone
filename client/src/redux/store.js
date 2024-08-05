import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { thunk } from 'redux-thunk';

import {
  getCartProductsReducer,
  getProductDetailsReducer,
  getProductsReducer,
} from './reducer/product.reducer';

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getCartItems: getCartProductsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
