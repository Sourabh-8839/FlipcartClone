import asyncHandler from '../Utilies/asyncHandler.js';
import { uploadOnCloudinary } from '../Utilies/cloudinary.js';
import { products } from '../constant.js';
import { Product } from '../models/product.schema.js';
import { ApiResponse } from '../Utilies/apiResponse.js';

import ApiFeatures from '../Utilies/apiFeatures.js';
import { ApiError } from '../Utilies/apiError.js';

const createProduct = asyncHandler(async (req, res, next) => {
  const avatarLocalFilePath = req.file?.path;

  const result = await uploadOnCloudinary(avatarLocalFilePath);

  //   //     let images = [];

  //   //   if (typeof req.body.images === 'string') {
  //   //     images.push(req.body.images);
  //   //   } else {
  //   //     images = req.body.images;
  //   //   }

  //   const imagesLinks = [];

  //   //   for (let i = 0; i < images.length; i++) {
  //   //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //   //       folder: 'products',
  //   //     });

  imagesLinks.push({
    url: result.secure_url,
  });

  req.body.images = imagesLinks;
  req.body.user = req.user._id;

  const product = await Product.create(req.body);

  res
    .status(201)
    .json(new ApiResponse(201, product, 'Product Create Successfully'));
});

const getAllProducts = asyncHandler(async (req, res, next) => {
  const resultPerPage = 4;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFeature.query;

  let filteredProductsCount = products.length;

  apiFeature.pagination(resultPerPage);

  // products = await apiFeature.query;

  // const products = await Product.find({});

  res.status(200).json(new ApiResponse(200, products, 'Get all Products'));
  //     {
  //     success: true,
  //     products,
  //     productsCount,
  //     resultPerPage,
  //     filteredProductsCount,
  //   });
});

const getProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json(new ApiError(404, 'Product not found'));
  }

  console.log(product);

  res
    .status(200)
    .json(new ApiResponse(200, product, 'product found succesfully'));
});

export { createProduct, getAllProducts, getProduct };
