import { Box, Button, Grid, Typography, styled } from '@mui/material';
import { useData } from '../../contexts';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import PlaceOrder from '../../utils/placeOrder';
import { useState } from 'react';
import Login from '../login/Login';

const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    padding: '15px 0',
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

const ItemBox = styled(Box)`
  overflow: overLay;
  height: auto;
`;
const Cart = () => {
  const { cartList, removeItemFromCart } = useData();
  const [open, setOpen] = useState(false);

  const { account } = useData();

  const buyNow = () => {
    if (account) {
      PlaceOrder(cartList);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      {cartList.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartList?.length})
              </Typography>
            </Header>
            <ItemBox>
              {cartList.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  removeItemFromCart={removeItemFromCart}
                />
              ))}
            </ItemBox>

            <BottomWrapper>
              <StyledButton onClick={buyNow} variant='contained'>
                Place Order
              </StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartList} />
          </Grid>

          <Login open={open} setOpen={setOpen} />
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
