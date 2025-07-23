import "dotenv/config";
import express from "express";
import { router } from "./routes/routes.js";

const app = express();
app.use(express.json());

const { PORT } = process.env;

app.use("/", router);
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
