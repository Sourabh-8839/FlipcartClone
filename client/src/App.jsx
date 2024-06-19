import { useState } from 'react';

import './App.css';
import Header from './components/header/Header';
import { Box } from '@mui/material';
import Home from './components/Home/Home';
import { DataProvider } from './contexts';

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: '60px' }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
