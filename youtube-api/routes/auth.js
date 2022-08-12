import express from "express";
import { signin } from "../controllers/auth.js";
import { signup } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google");

export default router;
