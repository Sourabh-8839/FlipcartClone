import { Box, Typography, styled } from '@mui/material';
import React from 'react';

const NavContainer = styled(Box)`
  padding: 10px 30px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  font-family: inter_semi_bold, fallback-inter_semi_bold, Arial, sans-serif;
`;

const Navheader = ({ title, URL }) => {
  return (
    <NavContainer>
      <img src={URL} alt='NAvIcon' style={{ width: 64 }} />
      <Text>{title}</Text>
    </NavContainer>
  );
};

export default Navheader;
