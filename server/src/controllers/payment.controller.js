import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantkey } from '../constant.js';
import { ApiResponse } from '../Utilies/apiResponse.js';
import stripe from 'stripe';

const Stripe = stripe(
  'sk_test_51Pg07TRqCttqZEkSFWkPvOCSvHaHYfZStkUFFLBM2C8mJnuNkw9kSo37AkNUOTk8TUndPgnyuNyXl31SnLpHpSmw00FQiCoKPB'
);

const addPaytmGateway = async (req, res) => {
  try {
    const { products } = req.body;

    console.log(products);
    const lineItems = products.map((product) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    const session = await Stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.STRIPE_SUCCESS_URL}`,
      cancel_url: `${process.env.STRIPE_CANCEL_URL}`,
    });

    console.log(session);

    res.status(200).json(new ApiResponse(200, { id: session.id }));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error, message: 'Transaction failed' });
  }
};

export default addPaytmGateway;
