import { Box, Button, styled } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useData } from '../../contexts';

import { useNavigate } from 'react-router-dom';
import {payUsingPaytm} from '../../service/api.js'
import { post } from '../../utils/paytm.js';

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
  const { addItemToCart } = useData();

  const navigate = useNavigate();
  const addtoCart = () => {
    const item = { ...product, quantity: 1 };

    addItemToCart(item);
    navigate('/cart');
  };

  const buyNow =async() =>{

    let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});

        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
  }

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
      <StyledButton variant='contained' style={{ background: '#FB641B' }}
      onClick={()=>}
      >
        <FlashOnIcon /> Buy Now
      </StyledButton>
    </LeftComponent>
  );
};

export default ImageView;
