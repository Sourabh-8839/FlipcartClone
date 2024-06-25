import jwt from 'jsonwebtoken';
import asyncHandler from '../Utilies/asyncHandler.js';
import { ApiError } from '../Utilies/apiError.js';
import { User } from '../models/user.schema.js';

export const isAuthenticatedUser = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new ApiError(401, 'Unauthorized request ');
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETKEY);

    const user = await User.findById(decodedToken?._id).select(
      '-password -refreshToken'
    );

    if (!user) {
      throw new ApiError(401, 'Invalid Access Token');
    }
    console.log(user);
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(400, error?.message || 'Invalid Access Token');
  }
});

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
