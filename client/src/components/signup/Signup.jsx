import { Box, Button, TextField, styled } from '@mui/material';

import { authentication } from '../../service/api';
import { useState } from 'react';
import { useData } from '../../contexts/data.context';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 35px;

  & > div,
  & > button,
  & > p {
    margin-top: 15px;
  }
`;

const SignupButton = styled(Button)`
  background: #fb641b;
  text-transform: none;
  color: #fff;
  border-radius: 2px;
  height: 45px;
`;

const LoginButton = styled(Button)`
  background: #fff;
  text-transform: none;
  border-radius: 2px;
  height: 45px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const signupIntialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
};

const Signup = ({ account, toggleAccount, handleClose }) => {
  const [signup, setSignUp] = useState(signupIntialValues);

  const { setAccount } = useData();

  const signupUser = async () => {
    const response = await authentication(signup);

    console.log(response);
    if (!response) {
      return;
    }

    handleClose();

    setAccount(signup.firstname);
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;

    setSignUp({ ...signup, [name]: value });
  };
  return (
    <Wrapper>
      <TextField
        variant='standard'
        onChange={(e) => onInputChange(e)}
        name='firstname'
        label='Enter Firstname'
      />
      <TextField
        variant='standard'
        onChange={(e) => onInputChange(e)}
        name='lastname'
        label='Enter Lastname'
      />
      <TextField
        variant='standard'
        onChange={(e) => onInputChange(e)}
        name='username'
        label='Enter Username'
      />
      <TextField
        variant='standard'
        onChange={(e) => onInputChange(e)}
        name='email'
        label='Enter Email'
      />
      <TextField
        variant='standard'
        onChange={(e) => onInputChange(e)}
        name='password'
        label='Enter Password'
      />

      <SignupButton onClick={() => signupUser()}>Continue</SignupButton>
      <LoginButton
        onClick={() => {
          toggleAccount(account);
        }}
      >
        Login
      </LoginButton>
    </Wrapper>
  );
};
export default Signup;
