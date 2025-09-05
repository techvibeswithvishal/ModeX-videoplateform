import { Request, Response } from "express";
import Enrollment from "../models/Enrollment";

// Extend Request type to include user
interface AuthRequest extends Request {
  user?: { id: string };
}

// Enroll a student in a course
export const enrollCourse = async (req: AuthRequest, res: Response) => {
  try {
    const studentId = req.user?.id;
    const { courseId } = req.body;

    if (!studentId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const alreadyEnrolled = await Enrollment.findOne({ student: studentId, course: courseId });
    if (alreadyEnrolled) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    const enrollment = new Enrollment({ student: studentId, course: courseId });
    await enrollment.save();

    res.status(201).json({ message: "Enrolled successfully", enrollment });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get all enrollments for the logged-in student
export const getMyEnrollments = async (req: AuthRequest, res: Response) => {
  try {
    const studentId = req.user?.id;

    if (!studentId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const enrollments = await Enrollment.find({ student: studentId }).populate("course");
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
