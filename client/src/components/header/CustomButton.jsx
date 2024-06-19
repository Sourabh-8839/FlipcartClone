import { Box, Button, Typography, styled } from '@mui/material';
import userIcon from '../../assets/images/profile-52e0dc.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from '../login/Login';
import { useState } from 'react';
import { useData } from '../../contexts/index.js';

import Profile from './Profile.jsx';

const CustomContainer = styled(Box)`
  margin-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    padding: 5px;
    border-radius: 8px;
    color: black;

    :hover {
      cursor: pointer;
      background: #2a55e5;
      color: white;
    }
  }
`;

const ButtonContainer = styled(Button)`
  & > span {
    text-transform: none;
    margin: 0px 5px;
  }
`;

const CartDiv = styled(Box)`
  display: flex;
  & > p {
    margin-left: 4px;
  }
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useData();

  const loginOpenHandler = () => {
    setOpen(true);
  };
  return (
    <CustomContainer>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <ButtonContainer onClick={loginOpenHandler}>
          <img src={userIcon} alt='' />
          <span>Login</span>
        </ButtonContainer>
      )}

      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>

      <CartDiv>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartDiv>
      <Login open={open} setOpen={setOpen} />
    </CustomContainer>
  );
};

export default CustomButton;
