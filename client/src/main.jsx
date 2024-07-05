import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from 'react-router-dom';

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route path='/' element={<App />}></Route>)
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <App />
    </React.StrictMode>
  </Provider>
);
