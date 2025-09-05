// src/app/courses/[id]/page.tsx
import { useParams } from "next/navigation";
import Link from "next/link";

const allCourses = [
  { id: "1", title: "React for Beginners", description: "Learn React from scratch." },
  { id: "2", title: "TypeScript Basics", description: "Master TypeScript fundamentals." },
  { id: "3", title: "Next.js 13", description: "Build fullstack apps with Next.js 13." },
];

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id;
  const course = allCourses.find(c => c.id === courseId);

  if (!course) return <div className="container mx-auto py-10">Course not found!</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4">{course.description}</p>
      <Link href="/courses" className="text-blue-600 hover:underline">← Back to all courses</Link>
    </div>
  );
}
