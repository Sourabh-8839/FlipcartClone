import * as actionTypes from '../constants/productConstant.js';

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };

    case actionTypes.GET_PRODUCTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return { loading: 'true' };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: 'false', product: action.payload };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return { loading: 'false', error: action.payload };

    default:
      return state;
  }
};

export const getCartProductsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_CART_REQUEST:
      return { loading: 'true' };
    case actionTypes.GET_PRODUCT_CART_SUCCESS:
      return { loading: 'false', product: action.payload };
    case actionTypes.GET_PRODUCT_CART_FAIL:
      return { loading: 'false', error: action.payload };

    default:
      return state;
  }
};
