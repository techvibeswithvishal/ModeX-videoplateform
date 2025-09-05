import Link from 'next/link'
import CourseCard from '@/components/CourseCard'

const dummyCourses = [
  { id: '1', title: 'React for Beginners', description: 'Learn React from scratch.' },
  { id: '2', title: 'TypeScript Basics', description: 'Master TypeScript fundamentals.' },
]

export default function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Featured Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Link href="/courses" className="mt-6 inline-block text-blue-600 hover:underline">
        View All Courses
      </Link>
    </div>
  )
}
