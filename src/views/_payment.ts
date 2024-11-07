import {
  loadStripe,
  StripeElements,
  StripeCardElement,
  Stripe,
} from "@stripe/stripe-js";

let stripe: Stripe | null = null;
let elements: StripeElements | null = null;
let card: StripeCardElement | null = null;

document.addEventListener("DOMContentLoaded", async () => {
  const stripeInstance = await loadStripe(`${process.env.STRIPE_KEY}`);

  if (!stripeInstance) {
    console.error("Stripe não foi inicializado.");
    return;
  }

  stripe = stripeInstance;
  elements = stripe.elements();
  card = elements.create("card", { hidePostalCode: true });
  card.mount("#payment-card");

  const form = document.querySelector("form");
  const errors = document.querySelector("#payment-errors");

  if (!form || !errors) {
    console.error("Formulário ou elemento de erro não encontrado.");
    return;
  }

  form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();
    if (card) {
      const res = await stripe?.createToken(card);
      errors.textContent = res?.error?.message || "";

      if (res && !res.error) {
        console.log("Token criado:", res.token);
      }
      const stripeToken = document.createElement("input");
      stripeToken.setAttribute("type", "hidden");
      stripeToken.setAttribute("name", "stripeToken");
      stripeToken.setAttribute("value", res?.token?.id || "");
      form.appendChild(stripeToken);
      form.submit();
    } else {
      console.error("Elemento do cartão não foi inicializado.");
    }
  });
});
