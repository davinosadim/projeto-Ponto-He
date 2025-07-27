import { Schema, model } from "mongoose";
import { connectDbPonto } from "../db/dbPonto.js";

const pontoSchema = new Schema({
  nomeColaborador: String,
  matricula: { type: String, unique: true },
  batidaPontoEntrada: { type: Date },
  batidaPontoSaida: { type: Date },
  data: { type: Date },
});

export default connectDbPonto.model("ponto", pontoSchema, "ponto");
