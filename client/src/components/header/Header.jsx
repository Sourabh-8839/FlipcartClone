import flipcart from '../../assets/images/fkheaderlogo_exploreplus-44005d.svg';

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  styled,
} from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../redux/actions/productActions';
import { useData } from '../../contexts';

const AppBarStyle = styled(AppBar)`
  background: white;
  color: black;
  // box-shadow: none;
`;

const Image = styled('img')({
  ':hover': {
    cursor: 'pointer',
  },
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const Header = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const { setCartList, account } = useData();

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.getCartItems);

  useEffect(() => {
    if (account) {
      console.log(account);
      dispatch(getCartProducts());

      setCartList(product);
    }
  }, [dispatch, account]);

  const list = () => {
    return (
      <Box width={200}>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
        >
          <ListItemButton>
            {/* <ListItemIcon>
              <SendIcon />
            </ListItemIcon> */}
            <ListItemText primary='Login' />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary='Become a Seller' />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary='More' />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary='Cart' />
          </ListItemButton>
        </List>
      </Box>
    );
  };

  return (
    <AppBarStyle>
      <Toolbar>
        <MenuButton onClick={handleOpen}>
          <MenuIcon style={{ color: 'blue' }} />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Box>
          <Link to={'/'}>
            <Image src={flipcart} alt='' style={{ height: '40px' }} />
          </Link>
        </Box>
        <Search />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </AppBarStyle>
  );
};

export default Header;
