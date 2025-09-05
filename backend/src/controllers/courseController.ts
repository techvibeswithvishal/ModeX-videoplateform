import { Request, Response } from "express";
import Course from "../models/Course";

// ✅ Create a new course
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, price } = req.body;
    const instructorId = (req as any).user.id; // From JWT middleware

    const course = new Course({
      title,
      description,
      price,
      instructor: instructorId,
    });

    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Get all courses
export const getCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await Course.find().populate("instructor", "name email");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Get single course by ID
export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "instructor",
      "name email"
    );
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Update course
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, price } = req.body;

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { title, description, price },
      { new: true }
    );

    if (!course) return res.status(404).json({ message: "Course not found" });

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Delete course
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
