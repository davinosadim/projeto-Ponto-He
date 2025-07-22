import "dotenv";
import mongoose from "mongoose";

// const { MONGO_URL_DB_PONTO } = process.env;

export const connectDbPonto = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dbponto:iJYIkuFm2P7ElPm2@cluster0.ewgrhfj.mongodb.net/registrosPonto?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Conectado ao banco de dados do ponto");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados do ponto", error);
  }
};
