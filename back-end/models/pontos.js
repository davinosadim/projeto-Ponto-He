import { Schema, model } from "mongoose";

const pontoSchema = new Schema({
  nomeColaborador: String,
  matricula: { type: String, unique: true },
  batidaPontoEntrada: { type: Date },
  batidaPontoSaida: { type: Date },
  data: { type: Date },
});

export default model("ponto", pontoSchema, "ponto");
