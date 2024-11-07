import "dotenv/config";
import express from "express";
import stripeRoutes from "./routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/views/" });
});

app.use(stripeRoutes);

app.listen(process.env.PORT || 3334, () => console.log(`Server running on port:  ${process.env.PORT}`));
