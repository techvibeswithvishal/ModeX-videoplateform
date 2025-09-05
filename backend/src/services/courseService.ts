import Course, { ICourse } from "../models/Course";

export const createCourse = async (
  title: string,
  description: string,
  price: number,
  instructorId: string
): Promise<ICourse> => {
  const course = new Course({ title, description, price, instructor: instructorId });
  await course.save();
  return course;
};

export const getCourses = async (): Promise<ICourse[]> => {
  return Course.find().populate("instructor", "name email");
};

export const getCourseById = async (id: string): Promise<ICourse | null> => {
  return Course.findById(id).populate("instructor", "name email");
};

export const updateCourse = async (
  id: string,
  updates: Partial<ICourse>
): Promise<ICourse | null> => {
  return Course.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteCourse = async (id: string): Promise<ICourse | null> => {
  return Course.findByIdAndDelete(id);
};
