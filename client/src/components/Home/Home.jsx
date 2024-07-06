import Navbar from './Navbar/Navbar';
import { Box, styled } from '@mui/material';
import Banner from './Banner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import Slide from './Slides/Slide';
import MidSlide from './Slides/MidSlide';
import MidSection from './Slides/MidSection';
import CircularProgress from '@mui/material/CircularProgress';

const ChildComponent = styled(Box)`
  padding: 10px;
  background: #f1f2f4;
  display: block;
`;

const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <ChildComponent>
        <Banner />

        <MidSlide products={products} title='Deal of the day' timer={true} />
        <Slide products={products} title='Discount for you' timer={false} />
        <MidSection />
        <Slide products={products} title='Suggesting Items' timer={false} />
        <Slide products={products} title='Top Slection' timer={false} />
        <Slide
          products={products}
          title='End of season Bestseller'
          timer={false}
        />
      </ChildComponent>
    </>
  );
};

export default Home;
