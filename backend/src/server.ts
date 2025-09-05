import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

// Load env variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect DB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });
