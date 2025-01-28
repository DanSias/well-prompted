import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

// Middleware
const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(`${req.method} ${req.path}`);
  next();
};

// Routes
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Well Prompted API!" });
});
// Test User Data
router.get("/users/1", (req, res) => {
  res.json({ name: "Daniel Sias" });
});

// Create the Express app
const app = express();

// Apply Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Apply Routes
app.use("/api", router);

app.use("/api/auth", authRoutes);

// Start the Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
