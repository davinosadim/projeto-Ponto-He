import express from "express";
import { findInfo, getByDate } from "../controllers/catracaController.js";

export const router = express.Router();

router.get("/registrosCatracas", getByDate);
router.get("/", findInfo);
