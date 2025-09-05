'use client'

import { useState, useEffect } from 'react'
import api from '@/lib/axiosClient'

interface Course {
  id: string
  title: string
  description: string
  videoUrl?: string
}

export default function useCourse(courseId?: string) {
  const [courses, setCourses] = useState<Course[]>([])
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch all courses
  const fetchAllCourses = async () => {
    setLoading(true)
    try {
      const res = await api.get('/courses')
      setCourses(res.data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Fetch single course by ID
  const fetchCourseById = async (id: string) => {
    setLoading(true)
    try {
      const res = await api.get(`/courses/${id}`)
      setCourse(res.data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (courseId) {
      fetchCourseById(courseId)
    } else {
      fetchAllCourses()
    }
  }, [courseId])

  return { courses, course, loading, error, fetchAllCourses, fetchCourseById }
}
