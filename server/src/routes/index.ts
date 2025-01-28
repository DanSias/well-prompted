import express from "express";
import userRoutes from "./users";

const router = express.Router();

// Aggregate all routes
router.use("/users", userRoutes);

export default router;
