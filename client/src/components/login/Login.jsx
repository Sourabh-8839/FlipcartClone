import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { useState } from 'react';
import Signup from '../signup/Signup';
import { loginUser } from '../../../service/api';
import { useData } from '../../contexts';

const Wrapper = styled(Box)`
  display: flex;
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat bottom;
  height: 88%;
  width: 40%;
  padding: 30px 15px;
  color: white;
`;

const Components = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  & > div,
  & > button,
  & > p {
    margin-top: 25px;
  }
`;

const LoginButton = styled(Button)`
  background: #fb641b;
  text-transform: none;
  color: #fff;
  border-radius: 2px;
  height: 45px;
`;

const RequestOtpButton = styled(Button)`
  background: #fff;
  text-transform: none;
  border-radius: 2px;
  height: 45px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations',
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here",
    subHeading: 'Signup to get started',
  },
};

const loginInitialValues = {
  username: '',
  password: '',
};

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Login = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, showError] = useState(false);

  const { setAccount } = useData();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    showError(false);
  };

  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const loginHandler = async () => {
    const response = await loginUser(login);

    console.log(response.data);
    if (response.data.statusCode === 200) {
      const firstName = response.data.data.user.firstname;
      handleClose();
      setAccount(firstName);
    } else {
      showError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: 'unset' } }}
    >
      <Wrapper>
        <Image>
          <Typography variant='h5'>{account.heading}</Typography>
          <Typography style={{ marginTop: '20px' }}>
            {account.subHeading}
          </Typography>
        </Image>

        {account.view === 'login' ? (
          <Components>
            <TextField
              label='Enter Email/Mobile'
              variant='standard'
              name='email'
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            {error && <Error>Please enter valid Email or Password</Error>}
            <TextField
              label='Enter Password'
              variant='standard'
              name='password'
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <Text>
              By continuing, you agree to Flipkarts Terms of Use and Privacy
              Policy.
            </Text>

            <LoginButton onClick={loginHandler}>Login</LoginButton>
            <Typography style={{ textAlign: 'center' }}>Or</Typography>
            <RequestOtpButton>Request Otp</RequestOtpButton>
            <CreateAccount onClick={toggleSignUp}>
              New to Flipkart? Create an account
            </CreateAccount>
          </Components>
        ) : (
          <Signup
            toggleAccount={toggleAccount}
            account={accountInitialValues.login}
            handleClose={handleClose}
          />
        )}
      </Wrapper>
    </Dialog>
  );
};

export default Login;
