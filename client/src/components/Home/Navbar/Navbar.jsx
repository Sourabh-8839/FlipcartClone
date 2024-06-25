import { Box, styled } from '@mui/material';

import { navData } from '../../../constants/constants';
import Navheader from './Navheader';

const NavbarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '50px 130px 0 130px',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    margin: 0,
  },
}));
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
