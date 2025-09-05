import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/modexdb",
  JWT_SECRET: process.env.JWT_SECRET || "supersecretkey",
};
