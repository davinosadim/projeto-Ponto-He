import catracas from "../models/catracas.js";
import { connectDbCatraca } from "../db/dbCatraca.js";

export const getByDated = async (req, res) => {
  try {
    await connectDbCatraca();

    const result = await catracas.find();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "erro ao buscar os dados" });
  }
};

export const findInfo = async (req, res) => {
  try {
    await connectDbCatraca();

    const infor = await catracas.find();

    res.status(200).json(infor);
  } catch (error) {
    res.status(500).json({ message: "erro ao buscar as informações" });
  }
};
