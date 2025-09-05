import { Router } from "express";
import { enrollCourse, getMyEnrollments } from "../controllers/enrollmentController";

const router = Router();

// Route to enroll in a course
router.post("/enroll", enrollCourse);

// Route to get current student's enrollments
router.get("/my-enrollments", getMyEnrollments);

export default router;
