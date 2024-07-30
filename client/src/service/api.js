import axios from 'axios';

const URL = 'http://localhost:8000/api/v1';

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
    };

    let response = await axios.post(
      `${URL}/create-checkout-session`,
      data,
      headers
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
  }
};

export { authentication, loginUser, payUsingStripe };
