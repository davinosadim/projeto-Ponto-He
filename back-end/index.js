import "dotenv/config";
import express from "express";

const app = express();

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send({ Ola: "api deu certo" });
});

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
