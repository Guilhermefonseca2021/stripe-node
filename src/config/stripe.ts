import Stripe from "stripe";
import "dotenv/config";

const stripe = new Stripe(`${process.env.STRIPE_KEY}`);

export default stripe;