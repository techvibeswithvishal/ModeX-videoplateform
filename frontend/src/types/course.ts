export interface Course {
  id: string
  title: string
  description: string
  videoUrl?: string
  instructorId?: string
  createdAt?: string
  updatedAt?: string
  rating?: number
  studentsEnrolled?: number
}
