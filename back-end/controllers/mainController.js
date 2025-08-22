import mongoose from "mongoose";
import catracas from "../models/catracas.js";
import pontos from "../models/pontos.js";

export const gettingClockAndAcess = async (req, res) => {
  try {
    const { matricula } = req.body;

    const acessVerify = await catracas.where({ matricula });
    const clockVerify = await pontos.find({ matricula });

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

    const gettinEnterAcessHours = acessFiltered.map((d) =>
      new Date(d.registroEntrada).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );

    const gettinExitAcessHours = acessFiltered.map((d) =>
      new Date(d.registroSaida).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );

    const fullHourClock = { gettingEnterClockHours, gettingExitClockHours };

    const fullHourAcess = { gettinEnterAcessHours, gettinExitAcessHours };

    console.log(fullHourClock);
    console.log(fullHourAcess);

    if (fullHourAcess || fullHourClock) {
      res.status(200).json({ fullHourAcess, fullHourClock });
    } else {
      res.status(400).json({ message: "dados não encontrados" });
    }
  } catch (error) {
    console.error("Erro ao comparar os dados", error);
    return res.status(500).json({ error: "erro servidor" });
  }
};
