import { Box, styled } from '@mui/material';
import React from 'react';
import { navData } from '../../../constants/constants';
import Navheader from './Navheader';

const NavbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 50px 130px 0 130px;
`;
const Navbar = () => {
  return (
    <NavbarContainer>
      {navData.map((items) => (
        <Navheader key={items.URL} title={items.text} URL={items.url} />
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
