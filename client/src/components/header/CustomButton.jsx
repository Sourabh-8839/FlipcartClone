import { Badge, Box, Button, Typography, styled } from '@mui/material';
import userIcon from '../../assets/images/profile-52e0dc.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from '../login/Login';
import { useState } from 'react';
import { useData } from '../../contexts/index.js';

import Profile from './Profile.jsx';
import { Link } from 'react-router-dom';

const CustomContainer = styled(Box)`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  & > button,
  & > p,
  & > div,
  & > a {
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

const CartDiv = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;

  & > p {
    margin-left: 4px;
  }
  :hover ;
`;

const CartNumber = styled(Box)`
  position: relative;

  :after {
    content: attr(current-counter);
    position: absolute;
    top: -10px;
    left: 11px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #2a55e5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border: 2px solid white;
    color: white;
  }
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useData();

  const { cartList } = useData();

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

      <Typography style={{ width: 'max-content' }}>Become a Seller</Typography>
      <Typography>More</Typography>

      <CartDiv to='/cart'>
        <Badge badgeContent={cartList.length} color='secondary'>
          <ShoppingCartIcon style={{ zIndex: 2 }} />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </CartDiv>

      <Login open={open} setOpen={setOpen} />
    </CustomContainer>
  );
};

export default CustomButton;
