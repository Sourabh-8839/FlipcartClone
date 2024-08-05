import Router from 'express';
import { addCartItems, getCartItems } from '../controllers/cart.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/additemstocart').post(isAuthenticatedUser, addCartItems);
router.route('/getItems').get(isAuthenticatedUser, getCartItems);

export default router;
