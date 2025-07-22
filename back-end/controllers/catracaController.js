import catracas from "../models/catracas.js";
import { connectDbCatraca } from "../db/dbCatraca.js";

export const getByDate = async (req, res) => {
  try {
    connectDbCatraca();

    const { matricula, data } = req.body;

    const result = await catracas.find({
      matricula,
      data,
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "erro ao buscar os dados" });
  }
};
