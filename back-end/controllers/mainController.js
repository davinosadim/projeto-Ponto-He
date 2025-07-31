import mongoose from "mongoose";
import catracas from "../models/catracas.js";
import pontos from "../models/pontos.js";

export const gettingClockAndAcess = async (req, res) => {
  try {
    const { matricula } = req.body;

    // const acessVerify = await catracas.where({ data });
    const clockVerify = await pontos.where({ matricula });

    // const acessFiltered = acessVerify.map((item) => ({
    //   nomeColaborador: item.nomeColaborador,
    //   matricula: item.matricula,
    //   registroEntrada: item.registroEntrada,
    //   registroSaida: item.registroSaida,
    //   data: item.data,
    // }));

    const clockFiltered = clockVerify.map((item) => ({
      nomeColaborador: item.nomeColaborador,
      matricula: item.matricula,
      batidaEntrada: item.batidaPontoEntrada,
      batidaSaida: item.batidaPontoSaida,
    }));

    const gettingEnterClockHours = clockFiltered.map((d) =>
      new Date(d.batidaEntrada).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );

    const gettingExitClockHours = clockFiltered.map((d) =>
      new Date(d.batidaSaida).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );

    const fullHour = { gettingEnterClockHours, gettingExitClockHours };

    console.log(fullHour);

    if (fullHour) {
      res.status(200).json({ fullHour });
    } else {
      res.status(400).json({ message: "dados não encontrados" });
    }
  } catch (error) {
    console.error("Erro ao comparar os dados", error);
    return res.status(500).json({ error: "erro servidor" });
  }
};
