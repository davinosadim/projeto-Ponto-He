import express from "express";
import { getByDate } from "../controllers/pontoController.js";

export const router = express.Router();

router.get("/registrosPonto", getByDate);
