import { Schema, model } from "mongoose";

const pontoSchema = new Schema({
  nomeColaborador: String,
  matricula: { type: String, unique: true },
  registroEntrada: { type: Date },
  registroSaida: { type: Date },
  data: { type: Date },
});

export default model("pontoModels", pontoSchema);
