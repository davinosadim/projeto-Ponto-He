import mongoose from "mongoose";
import ponto from "../models/catracas.js";
import { dadosPonto } from "./ponto_seed.js";
import { connectDbPonto } from "../db/dbPonto.js";

connectDbPonto();

const seedData = async () => {
  await connectDbPonto();

  try {
    await ponto.insertMany(dadosPonto);
    console.log("Dados inseridos com sucesso");
  } catch (err) {
    console.error("Error ao inserir os dados", err);
  } finally {
    mongoose.disconnect();
  }
};

seedData();
