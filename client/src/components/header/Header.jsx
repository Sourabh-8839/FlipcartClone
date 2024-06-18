import flipcart from '../../assets/images/fkheaderlogo_exploreplus-44005d.svg';

import { AppBar, Box, Toolbar, styled } from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';

const AppBarStyle = styled(AppBar)`
  background: white;
  color: black;
  // box-shadow: none;
`;
// const Component = styled(Box)``;
const Header = () => {
  return (
    <AppBarStyle>
      <Toolbar>
        <Box>
          <img src={flipcart} alt='' style={{ height: '40px' }} />
        </Box>
        <Search />
        <CustomButton />
      </Toolbar>
    </AppBarStyle>
  );
};

export default Header;
