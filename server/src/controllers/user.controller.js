import asyncHandler from '../Utilies/asyncHandler.js';
import { ApiError } from '../Utilies/apiError.js';
import { User } from '../models/user.schema.js';
import { ApiResponse } from '../Utilies/apiResponse.js';

let options = {
  httpOnly: false,
  secure: false,
};

const genreateRefreshTokenAndaccessToken = async (user_id) => {
  try {
    const user = await User.findById(user_id);

    console.log(user);
    const accessToken = await user.generateAccessToken();

    console.log(accessToken);

    const refreshToken = await user.generateRefreshToken();

    console.log(refreshToken);

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      'Something went wrong while genrating refresh and access Token'
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  if (
    [username, firstname, lastname, email, password].some(
      (field) => field.trim === ''
    )
  ) {
    throw new ApiError(200, 'All fields required');
  }

  if (!email.includes('@gmail.com')) {
    throw new ApiError(400, 'email must required @gmail');
  }

  const existedEmail = await User.findOne({ email: email });

  console.log(existedEmail);

  if (existedEmail) {
    throw new ApiError(409, 'email is alredy existed');
  }

  const existedUsername = await User.findOne({ username: username });

  if (existedEmail) {
    throw new ApiError(409, 'username is already existed');
  }

  const user = await User.create({
    firstname: firstname,
    lastname: lastname,
    username: username,
    email: email,
    password: password,
  });

  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );

  if (!createdUser) {
    throw new ApiError(500, 'Something Went Wrong While registring User');
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, 'User registered Succesfully'));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    throw new ApiError(401, 'email or password is required');
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    throw new ApiError(404, 'user does not exist');
  }

  const isValidPassword = await user.isPasswordCorrect(password);

  if (!isValidPassword) {
    throw new ApiError(401, 'Invalid Password');
  }

  const { accessToken, refreshToken } =
    await genreateRefreshTokenAndaccessToken(user._id);

  const updatedUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );

  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: updatedUser,
          accessToken,
          refreshToken,
        },
        'User login succesfully '
      )
    );
});

export { registerUser, loginUser };
