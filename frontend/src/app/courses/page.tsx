import CourseCard from '@/components/CourseCard'

const allCourses = [
  { id: '1', title: 'React for Beginners', description: 'Learn React from scratch.' },
  { id: '2', title: 'TypeScript Basics', description: 'Master TypeScript fundamentals.' },
  { id: '3', title: 'Next.js 13', description: 'Build fullstack apps with Next.js 13.' },
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
