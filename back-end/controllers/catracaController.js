import catracas from "../models/catracas.js";
import { connectDbCatraca } from "../db/dbCatraca.js";

export const getByDate = async (req, res) => {
  try {
    await connectDbCatraca();

    const { data } = req.body;

    const result = await catracas.find().where({ data });

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
