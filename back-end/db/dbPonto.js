import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL_DB_PONTO } = process.env;

export const connectDbPonto = async () => {
  try {
    await mongoose.connect(MONGO_URL_DB_PONTO);
    console.log("Conectado ao banco de dados do ponto");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados do ponto", error);
  }
};
