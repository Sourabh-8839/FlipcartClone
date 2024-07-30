import { Box, Button, styled } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useData } from '../../contexts';
import { loadStripe } from '@stripe/stripe-js';

import { useNavigate } from 'react-router-dom';
import { payUsingStripe } from '../../service/api.js';
import Login from '../login/Login.jsx';
import { useState } from 'react';
import PlaceOrder from '../../utils/placeOrder.js';

const LeftComponent = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',

  [theme.breakpoints.down('lg')]: {
    padding: '20px 0 0 40px',
  },
}));

const Image = styled('img')(({ theme }) => ({
  padding: '10px 15px',
  border: '1px solid #f0f0f0',
  width: '90%',
  //   [theme.breakpoints.down('md')]: {
  //     width: '60%',
  //   },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  height: '50px',
  borderRadius: '2px',

  [theme.breakpoints.down('lg')]: {
    width: '44%',
  },
  [theme.breakpoints.down('md')]: {
    width: '48%',
  },
}));

const ImageView = ({ product }) => {
  const { addItemToCart, account } = useData();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const addtoCart = () => {
    const item = { ...product, quantity: 1 };

    addItemToCart(item);
    navigate('/cart');
  };

  const makePayment = async () => {
    if (account) {
      let productItem = [{ ...product, quantity: 1 }];

      await PlaceOrder(productItem);
    } else {
      setOpen(true);
    }
  };

  return (
    <LeftComponent>
      <Image src={product.images[0].detailUrl} alt='Product' />

      <StyledButton
        variant='contained'
        style={{ marginRight: '10px', background: '#FF9F00' }}
        onClick={addtoCart}
      >
        <ShoppingCartIcon style={{ width: '20px', margin: '0 5px' }} />
        Add To Cart
      </StyledButton>
      <StyledButton
        variant='contained'
        style={{ background: '#FB641B' }}
        onClick={makePayment}
      >
        <FlashOnIcon /> Buy Now
      </StyledButton>
      <Login open={open} setOpen={setOpen} />
    </LeftComponent>
  );
};

export default ImageView;
