import express from "express";
import cors from "cors";
import { logger } from "./middleware/logger";
import router from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/api", router);

export default app;
