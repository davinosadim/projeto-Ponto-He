import { config as configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const { MONGO_URL_DB_CATRACA } = process.env;

export const connectDbCatraca = async () => {
  try {
    await mongoose.connect(MONGO_URL_DB_CATRACA);
    console.log("Conectado ao banco de dados da catraca");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados da catraca", error);
  }
};
