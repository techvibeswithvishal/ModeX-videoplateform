import { Router } from "express";
import { register, login } from "../controllers/authController";

const router = Router();

// Student & Instructor Signup
router.post("/register", register);

// Student & Instructor Login
router.post("/login", login);

export default router;
