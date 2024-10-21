import express from "express";
import { validate_data } from "../middlewares/validate_data.middleware.js";
import { calculate_score } from "../controllers/score.controller.js";

const router = express.Router();

router.post("/score", validate_data, calculate_score);

export default router;
