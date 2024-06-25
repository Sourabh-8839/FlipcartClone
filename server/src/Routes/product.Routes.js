import Router from 'express';
import {
  authorizeRoles,
  isAuthenticatedUser,
} from '../middlewares/auth.middleware.js';
import { createProduct, getAllProducts } from '../controllers/product.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router
  .route('/admin/product/new')
  .post(isAuthenticatedUser, upload.single('image'), createProduct);

router.route('/getAllproducts').get(getAllProducts);

export default router;
