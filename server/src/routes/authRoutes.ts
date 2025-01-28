import express from "express";
import loginRateLimiter from "../middleware/loginRateLimiter.js";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginRateLimiter, login);

export default router;
