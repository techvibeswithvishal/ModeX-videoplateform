import Enrollment from "../models/Enrollment";
import Course from "../models/Course";

export const purchaseCourse = async (
  courseId: string,
  studentId: string,
  paymentStatus: "pending" | "completed" | "failed" = "completed"
) => {
  const course = await Course.findById(courseId);
  if (!course) throw new Error("Course not found");

  const enrollment = new Enrollment({
    course: courseId,
    student: studentId,
    paymentStatus,
  });

  await enrollment.save();
  return enrollment;
};
