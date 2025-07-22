import "dotenv/config";
import express from "express";
import { connectDbCatraca } from "./db/dbCatraca.js";
import { connectDbPonto } from "./db/dbPonto.js";
import pontos from "./models/pontos.js";
import catracas from "./models/catracas.js";

const app = express();
app.use(express.json());

const { PORT } = process.env;

app.get("/registrosCatraca", async (req, res) => {
  connectDbCatraca();

  try {
    const userDoc = await catracas.find();

    res.status(200).json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/registrosPonto", async (req, res) => {
  connectDbPonto();

  try {
    const userDoc = await pontos.find();

    res.status(200).json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
