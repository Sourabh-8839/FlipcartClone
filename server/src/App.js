import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { v4 as uuid } from 'uuid';

const App = express();

App.use(cors());

App.use(express.json({ limit: '16kb' }));

App.use(express.urlencoded({ extended: false, limit: '16kb' }));

// This is use for only file
App.use(express.static('public'));

App.use(cookieParser());

// Routes importing
import userRoute from './Routes/user.Routes.js';
import productRoute from './Routes/product.Routes.js';

App.use('/api/v1/user', userRoute);
App.use('/api/v1', productRoute);

export { App };
