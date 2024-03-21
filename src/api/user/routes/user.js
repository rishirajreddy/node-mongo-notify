import express from "express";
import { create } from "../controllers/user.js";

const router = express.Router();

router.post("/users", create);

export default router;
