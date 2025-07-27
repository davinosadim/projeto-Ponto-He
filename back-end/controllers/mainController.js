import mongoose from "mongoose";
import catracas from "../models/catracas.js";
import pontos from "../models/pontos.js";

export const gettingClockAndAcess = async (req, res) => {
  try {
    const { data } = req.body;

    const acessVerify = await catracas.where({ data });
    const clockVerify = await pontos.where({ data });

    const acessFiltered = acessVerify.map((item) => ({
      nomeColaborador: item.nomeColaborador,
      matricula: item.matricula,
      registroEntrada: item.registroEntrada,
      registroSaida: item.registroSaida,
      data: item.data,
    }));

    const clockFiltered = clockVerify.map((item) => ({
      nomeColaborador: item.nomeColaborador,
      matricula: item.matricula,
      batidaEntrada: item.batidaPontoEntrada,
      batidaSaida: item.batidaPontoSaida,
      data: item.data,
    }));

    const hour = new Date();

    if (hour > 8) {
      console.log(hour);
    }

    if (acessFiltered && clockFiltered) {
      res.status(200).json({ acessFiltered, clockFiltered });
    } else {
      res.status(400).json({ message: "dados não encontrados" });
    }
  } catch (error) {
    console.error("Erro ao comparar os dados", error);
    return res.status(500).json({ error: "erro servidor" });
  }
};
