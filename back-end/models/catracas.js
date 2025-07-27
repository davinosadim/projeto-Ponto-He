import { Schema } from "mongoose";
import { connectDbCatraca } from "../db/dbCatraca.js";

const catracaSchema = new Schema({
  nomeColaborador: String,
  matricula: { type: String },
  registroEntrada: { type: Date },
  registroSaida: { type: Date },
  data: { type: Date },
});

export default connectDbCatraca.model("catraca", catracaSchema, "catraca");
