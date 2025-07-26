import express from "express";
import { getByDate } from "../controllers/pontoController.js";
import { getByDated } from "../controllers/catracaController.js";

export const router = express.Router();

router.get("/registrosPonto", getByDate);
router.get("/registrosCatraca", getByDated);
