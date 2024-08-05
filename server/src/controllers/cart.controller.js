import { Product } from '../models/product.schema.js';
import { User } from '../models/user.schema.js';
import { ApiError } from '../Utilies/apiError.js';
import { ApiResponse } from '../Utilies/apiResponse.js';
import asyncHandler from '../Utilies/asyncHandler.js';

const addCartItems = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const { _id } = req.user;

  const product = await Product.findById(id);

  console.log(product._id);

  if (!product) {
    return new ApiError(403, 'product not Found');
  }

  const productId = product?._id;

  const user = await User.findByIdAndUpdate(
    _id,
    {
      $push: { cart: productId },
    },
    {
      new: true,
    }
  );

  res
    .status(200)
    .json(new ApiResponse(200, user, 'Add product into cart Successfully '));
});

const getCartItems = asyncHandler(async (req, res) => {
  const CartItems = await User.findOne({ _id: req.user._id }).populate(
    'cart',
    '-password'
  );

  const carts = CartItems?.cart;

  res.status(200).json(new ApiResponse(200, carts, 'get All CartItems'));
});

export { addCartItems, getCartItems };
