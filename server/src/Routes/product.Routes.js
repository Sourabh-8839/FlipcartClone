import Router from 'express';
import {
  authorizeRoles,
  isAuthenticatedUser,
} from '../middlewares/auth.middleware.js';
import {
  createProduct,
  getAllProducts,
  getProduct,
} from '../controllers/product.js';
import { upload } from '../middlewares/multer.middleware.js';

import addPaytmGateway from '../controllers/payment.controller.js';

const router = Router();

router
  .route('/admin/product/new')
  .post(isAuthenticatedUser, upload.single('image'), createProduct);

router.route('/getAllproducts').get(getAllProducts);
router.route('/getproduct/:id').get(getProduct);
router.route('/create-checkout-session').post(addPaytmGateway);

export default router;
