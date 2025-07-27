import catracas from "../models/catracas.js";
import { connectDbCatraca } from "../db/dbCatraca.js";
import mongoose from "mongoose";

export const findInfo = async (req, res) => {
  try {
    await connectDbCatraca();

    const infor = await catracas.find();

    res.status(200).json(infor);
    mongoose.disconnect;
  } catch (error) {
    res.status(500).json({ message: "erro ao buscar as informações" });
  }
};
