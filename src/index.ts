import "dotenv/config";
import express from "express";
import stripeRoutes from "./routes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname, '../views/index.html');
});
app.use(stripeRoutes);

app.listen(3333, () => console.log("Server is running on port 3333"));
