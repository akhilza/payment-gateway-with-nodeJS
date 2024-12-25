const stripe = require('../config/stripe');

// Create Payment Intent
const createPaymentIntent = async (req, res, next) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    next(error); // Pass error to global error handler
  }
};

module.exports = { createPaymentIntent };
