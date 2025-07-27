import { config as configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const { MONGO_URL_DB_CATRACA } = process.env;

export const connectDbCatraca = mongoose.createConnection(
  MONGO_URL_DB_CATRACA,

  {
    connectTimeoutMS: 50000,
    serverSelectionTimeoutMS: 20000,
    socketTimeoutMS: 45000,
  }
);
