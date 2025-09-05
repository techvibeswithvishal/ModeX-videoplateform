'use client'

import { useEffect, useState } from 'react'
import CourseCard from '@/components/CourseCard'
import api from '@/lib/axiosClient'

interface Course {
  id: string
  title: string
  description: string
}

export default function StudentDashboard() {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([])

  useEffect(() => {
    // Fetch enrolled courses from backend
    const fetchCourses = async () => {
      try {
        const res = await api.get('/enrollments/student')
        setEnrolledCourses(res.data)
      } catch (error) {
        console.error('Error fetching courses', error)
      }
    }
    fetchCourses()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      {enrolledCourses.length === 0 ? (
        <p>You have not enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enrolledCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  )
}
