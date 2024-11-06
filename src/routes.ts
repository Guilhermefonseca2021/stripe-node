import { Router } from "express";
import { createPayment } from "./controllers/stripeController";

const stripeRoutes = Router();

stripeRoutes.post("/charge", createPayment);

export default stripeRoutes;