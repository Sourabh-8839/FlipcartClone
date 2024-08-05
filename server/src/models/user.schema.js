import mongoose, { Schema } from 'mongoose';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      min: 5,
      max: 20,
    },

    lastname: {
      type: String,
      required: true,
      trim: true,
      min: 5,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    avatar: {
      type: String,
    },

    password: {
      type: String,
      required: [true, 'password is required'],
    },
    refreshToken: {
      type: String,
    },
    cart: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    role: {
      type: String,
      default: 'user',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRETKEY,
    { expiresIn: process.env.ACCESS_TOKEN_TIME_DURATION }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRETKEY,
    { expiresIn: process.env.REFRESH_TOKEN_TIME_DURATION }
  );
};

export const User = mongoose.model('User', userSchema);
