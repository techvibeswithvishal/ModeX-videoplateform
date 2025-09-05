import { create } from 'zustand'

interface Course {
  id: string
  title: string
  description: string
  videoUrl?: string
}

interface CourseState {
  courses: Course[]
  setCourses: (courses: Course[]) => void
  addCourse: (course: Course) => void
}

export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
  addCourse: (course) => set((state) => ({ courses: [...state.courses, course] })),
}))
