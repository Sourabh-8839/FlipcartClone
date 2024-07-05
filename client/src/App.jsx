import './App.css';
import Header from './components/header/Header';
import { Box } from '@mui/material';
import Home from './components/Home/Home';
import { DataProvider } from './contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailView from './components/details/DetailView';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:productId' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
