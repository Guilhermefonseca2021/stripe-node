import { Request, Response } from "express";
import stripe from "../config/stripe";

export async function createPayment(req: Request, res: Response) {
  const { amount, currency, source } = req.body;

  try {
    stripe.customers
      .create({
        email: req.body.email,
        source: req.body.stripeToken,
      })
      .then((customer) =>
        stripe.charges.create({
          amount: amount * 100,
          currency,
          source,
        })
      )
      .then(() => res.render("../views/success.html"))
      .catch((err) => console.log(err));

    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}
