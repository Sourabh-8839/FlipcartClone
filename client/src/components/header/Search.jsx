import { Box, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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

const Search = () => {
  return (
    <SearchDiv>
      <SearchIcondiv>
        <SearchIcon />
      </SearchIcondiv>

      <SearchInput placeholder='Search for Products,Brands and More'></SearchInput>
    </SearchDiv>
  );
};

export default Search;
