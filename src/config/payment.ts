import 'dotenv/config';

const stripe = Stripe(`${process.env.STRIPE_KEY}`);
const elements = stripe.elements(); // Get the Elements instance

// Now you can create a card element or other elements
const cardElement = elements.create("card", { hidePostalCode: true });
cardElement.mount("#payment-card"); // Mount the card element to a DOM element with ID 'payment-card'

const form = document.querySelector("form") as HTMLFormElement | null;
const errors = document.querySelector("#payment-errors") as HTMLElement | null;
