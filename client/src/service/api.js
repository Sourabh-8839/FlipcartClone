import axios from 'axios';
import { useData } from '../contexts';

const URL = 'http://localhost:8000/api/v1';

const user = JSON.parse(localStorage.getItem('user')) || null;

const token = user?.accessToken;

console.log(token);

const authentication = async (data) => {
  try {
    const response = await axios.post(`${URL}/user/signup`, data);

    return response;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};

const loginUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/user/login`, data);

    localStorage.setItem('user', JSON.stringify(response.data.data));
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};

const payUsingStripe = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}
      `,
    };

    let response = await axios.post(`${URL}/create-checkout-session`, data, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.log('Error', error);
  }
};

const AddtoCartItems = async (id) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(
      `${URL}/additemstocart`,
      { id: id },
      {
        headers,
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export { authentication, loginUser, payUsingStripe, AddtoCartItems };
