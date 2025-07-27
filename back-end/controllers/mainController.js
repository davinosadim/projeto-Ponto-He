import mongoose from "mongoose";
import catracas from "../models/catracas.js";
import pontos from "../models/pontos.js";

export const gettingClockAndAcess = async (req, res) => {
  try {
    const { dataAcess, dataClock } = req.body;

    const acessVerify = await catracas.find().where({ dataAcess });
    const clockVerify = await pontos.find().where({ dataClock });

    if (acessVerify && clockVerify) {
      res.status(200).json({ acessVerify, clockVerify });
    } else {
      res.status(400).json({ message: "dados não encontrados" });
    }
  } catch (error) {
    console.error("Erro ao comparar os dados", error);
    return res.status(500).json({ error: "erro servidor" });
  }
};
