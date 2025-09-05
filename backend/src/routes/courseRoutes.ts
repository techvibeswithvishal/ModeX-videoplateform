import { Router } from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,   // make sure these are exported in courseController.ts
  deleteCourse,
} from "../controllers/courseController";

import { authMiddleware, instructorOnly } from "../middlewares/authMiddleware";

const router = Router();

// Public: View courses
router.get("/", getCourses);
router.get("/:id", getCourseById);

// Instructor: Manage courses
router.post("/", authMiddleware, instructorOnly, createCourse);
router.put("/:id", authMiddleware, instructorOnly, updateCourse);
router.delete("/:id", authMiddleware, instructorOnly, deleteCourse);

export default router;
