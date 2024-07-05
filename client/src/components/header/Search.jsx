import { Box, InputBase, List, ListItem, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
const SearchDiv = styled(Box)`
  background: #f0f5ff;
  width: 50%;
  height: 2rem;
  border-radius: 8px;
  margin-left: 40px;
  display: flex;
`;

const SearchInput = styled(InputBase)`
  width: 100%;
  padding: 2px;
  margin-left: 5px;
`;

const SearchIcondiv = styled(Box)`
  margin: 5px;
  color: #818489;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: white;
  color: black;
  margin-top: 30px;
  width: 45%;
`;

const ListItemStyle = styled(ListItem)`
  font-size: 14px;
  margin-bottom: 2px;

  &>hover: {
    background: red;
  }
`;
const Search = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchDiv>
      <SearchIcondiv>
        <SearchIcon />
      </SearchIcondiv>

      <SearchInput
        placeholder='Search for Products,Brands and More'
        onChange={(e) => getText(e.target.value)}
        value={text}
      ></SearchInput>

      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemStyle onClick={() => setText('')}>
                  {product.name}
                </ListItemStyle>
              </Link>
            ))}
        </ListWrapper>
      )}
    </SearchDiv>
  );
};

export default Search;
