import {Elements, PaymentElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const Checkout = () => {
  const options = {
    clientSecret: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
    </Elements>
  );
};

