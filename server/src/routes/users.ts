import express from "express";
import { getAllUsers } from "../controllers/userController";

const router = express.Router();

// Define user-related routes
router.get("/", getAllUsers);

export default router;
