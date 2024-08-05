import axios from 'axios';
import * as action from '../constants/productConstant.js';

const URL = 'http://localhost:8000/api/v1';

const user = JSON.parse(localStorage.getItem('user')) || null;

const token = user?.accessToken;

console.log(token);

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/getAllproducts`);

    dispatch({ type: action.GET_PRODUCTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: action.GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: action.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/getproduct/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({ type: action.GET_PRODUCT_DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: action.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

export const getCartProducts = () => async (dispatch) => {
  try {
    dispatch({ type: action.GET_PRODUCT_CART_REQUEST });

    const { data } = await axios.get(`${URL}/getItems`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: action.GET_PRODUCT_CART_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: action.GET_PRODUCT_CART_FAIL, payload: error.message });
  }
};
