import axios from 'axios';
import * as action from '../constants/productConstant.js';

const URL = 'http://localhost:8000/api/v1';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/getAllproducts`);

    dispatch({ type: action.GET_PRODUCTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: action.GET_PRODUCTS_FAIL, payload: error.message });
  }
};
