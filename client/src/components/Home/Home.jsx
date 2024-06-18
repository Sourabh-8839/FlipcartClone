import React from 'react';
import Navbar from './Navbar/Navbar';
import { Box, styled } from '@mui/material';
import Banner from './Banner';

const ChildComponent = styled(Box)`
  padding: 10px;
  background: #f1f2f4;
`;
const Home = () => {
  return (
    <>
      <Navbar />
      <ChildComponent>
        <Banner />
      </ChildComponent>
    </>
  );
};

export default Home;
