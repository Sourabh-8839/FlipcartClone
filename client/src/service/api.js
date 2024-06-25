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
    return await axios.post(`${URL}/user/login`, data);
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};

export { authentication, loginUser };
