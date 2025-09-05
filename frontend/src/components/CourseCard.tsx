'use client'

import Link from 'next/link'

interface CourseCardProps {
  course: {
    id: string
    title: string
    description: string
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <Link
        href={`/courses/${course.id}`}
        className="text-blue-600 hover:underline"
      >
        View Course
      </Link>
    </div>
  )
}
