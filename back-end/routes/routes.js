import express from "express";
import { getByDate } from "../controllers/catracaController.js";

export const router = express.Router();

router.get("/registrosCatracas", getByDate);
