import express from "express";
import Stripe from "stripe";

const app = express();
const stripe = new Stripe(process.env.STRIPE_KEY || "", { apiVersion: "2024-10-28.acacia" });

app.set("view engine", "ejs");
app.set("views", "./views"); // Set the directory for your views

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/charge", async (req, res) => {
  try {
    const { amount, currency, source } = req.body; // Expect amount, currency, and source from request body
    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
    });

    res.json({ success: true, charge });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(3333, () => console.log("Server is running on port 3333"));
