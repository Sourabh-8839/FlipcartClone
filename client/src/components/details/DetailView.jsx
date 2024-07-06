import { useEffect } from 'react';
import { Box, CircularProgress, Grid, Typography, styled } from '@mui/material';

import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import ImageView from './ImageView';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
  background: #f1f3f6;
  margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
  display: 'flex',
  background: '#ffffff',

  [theme.breakpoints.down('md')]: {
    margin: 0,
  },
}));

const RightContainer = styled(Box)`
  margin-top: 50px;
  width: 60%;
`;
const DetailView = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  const { loading, product } = useSelector((state) => state.getProductDetails);

  return (
    <Component>
      {loading === true ? (
        <CircularProgress
          color='inherit'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '40vh 45vw',
            width: '80px',
            height: '80px',
          }}
        />
      ) : (
        product &&
        Object.keys(product).length && (
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ImageView product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
              <ProductDetail product={product} />
            </RightContainer>
          </Container>
        )
      )}
    </Component>
  );
};

export default DetailView;
