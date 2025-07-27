import mongoose from "mongoose";
import { connectDbPonto } from "../db/dbPonto.js";
import pontos from "../models/pontos.js";

export const getByDate = async (req, res) => {
  try {
    await connectDbPonto();

    const { data } = req.body;
    const dataCheck = await pontos.where({ data });

    res.status(200).json(dataCheck);
    mongoose.disconnect;
  } catch (error) {
    res.status(500).json({ message: "erro ao buscar os dados" });
  }
};
