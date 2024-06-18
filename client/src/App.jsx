import { useState } from 'react';

import './App.css';
import Header from './components/header/Header';
import { Box } from '@mui/material';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: '60px' }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
