import ponto from "../models/pontos.js";
import { connectDbPonto } from "../db/dbPonto.js";

export const getByDate = async (req, res) => {
  try {
    await connectDbPonto();

    const result = await ponto.find();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "erro ao buscar os dados" });
  }
};
