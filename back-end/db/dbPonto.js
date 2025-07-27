import { config as configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const { MONGO_URL_DB_PONTO } = process.env;

export const connectDbPonto = mongoose.createConnection(MONGO_URL_DB_PONTO, {
  connectTimeoutMS: 50000,
  serverSelectionTimeoutMS: 20000,
  socketTimeoutMS: 45000,
});
