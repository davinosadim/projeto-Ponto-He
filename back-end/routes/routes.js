import express from "express";
import { getByDate } from "../controllers/pontoController.js";
import { findInfo } from "../controllers/catracaController.js";
import { gettingClockAndAcess } from "../controllers/mainController.js";

export const router = express.Router();

// router.get("/registrosPonto", getByDate);
// router.get("/registrosCatraca", findInfo);

router.get("/registrosLogica", gettingClockAndAcess);
