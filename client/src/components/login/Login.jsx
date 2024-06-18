import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  TextField,
  Typography,
  styled,
} from '@mui/material';

const Wrapper = styled(Box)`
  display: flex;
  height: 70vh;
  width: 40vw;
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

const login = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Wrapper>
        <Image>
          <Typography variant='h5'>Login</Typography>
          <Typography style={{ marginTop: '20px' }}>
            Get access to your Orders, Wishlist and Recommendations
          </Typography>
        </Image>

        <Components>
          <TextField label='Enter Email/Mobile' variant='standard' />
          <TextField label='Enter Password' variant='standard' />
          <Typography>
            By continuing, you agree to Flipkarts Terms of Use and Privacy
            Policy.
          </Typography>

          <LoginButton>Login</LoginButton>
          <Typography style={{ textAlign: 'center' }}>Or</Typography>
          <RequestOtpButton>Request Otp</RequestOtpButton>
          <Typography>New to Flipkart? Create an account</Typography>
        </Components>
      </Wrapper>
    </Dialog>
  );
};

export default login;
