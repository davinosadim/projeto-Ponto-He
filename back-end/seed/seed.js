import mongoose from "mongoose";
import catracas from "../models/catracas.js";
import { dados } from "./catraca_seed.js";
import { connectDbCatraca } from "../db/dbCatraca.js";

connectDbCatraca();

const seedData = async () => {
  await connectDbCatraca();

  try {
    await catracas.insertMany(dados);
    console.log("Dados inseridos com sucesso");
  } catch (err) {
    console.error("Error ao inserir os dados", err);
  } finally {
    mongoose.disconnect();
  }
};

seedData();
