import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import courseRoutes from "./routes/courseRoutes";
import enrollmentRoutes from "./routes/enrollmentRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

// 🔹 Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// 🔹 Root route (for testing)
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// 🔹 API routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);

// 🔹 Error handler (last)
app.use(errorHandler);

export default app;
