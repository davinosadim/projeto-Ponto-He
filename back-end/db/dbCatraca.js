import "dotenv/config";
import mongoose from "mongoose";

// const { MONGO_URL_DB_CATRACA } = process.env;

export const connectDbCatraca = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dbponto:iJYIkuFm2P7ElPm2@cluster0.ewgrhfj.mongodb.net/registrosCatraca?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Conectado ao banco de dados da catraca");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados da catraca", error);
  }
};
