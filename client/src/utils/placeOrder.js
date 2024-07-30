import { loadStripe } from '@stripe/stripe-js';
import { payUsingStripe } from '../service/api';

const PlaceOrder = async (product) => {
  const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);

  const body = {
    products: [...product],
  };

  const response = await payUsingStripe(body);

  const session = response.data;

  // console.log(session);

  const result = stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.log(result.error);
  }
};

export default PlaceOrder;
