export interface User {
  id: string
  name: string
  email: string
  role: 'student' | 'instructor'
  createdAt?: string
  updatedAt?: string
}
