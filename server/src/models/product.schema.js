import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Enter product Name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please Enter product Description'],
    },
    price: {
      type: Number,
      required: [true, 'Please Enter product Price'],
      maxLength: [8, 'Price cannot exceed 8 characters'],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        detailUrl: {
          type: String,
        },
      },
    ],
    category: {
      type: String,
      required: [true, 'Please Enter Product Category'],
    },

    Stock: {
      type: Number,
      required: [true, 'Please Enter product Stock'],
      maxLength: [4, 'Stock cannot exceed 4 characters'],
      default: 1,
    },
    tagline: {
      type: String,
    },
    discount: {
      type: String,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },

    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],

    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
