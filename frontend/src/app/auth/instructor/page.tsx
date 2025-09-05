'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/axiosClient'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'student' | 'instructor'>('student') // default role
  const [error, setError] = useState('')
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Send role along with registration
      await api.post('/auth/register', { name, email, password, role })

      // Save token or role if backend returns it (here we simulate)
      localStorage.setItem('role', role)
      localStorage.setItem('token', 'dummy-token') // replace with real token if backend returns it

      // Redirect to dashboard based on role
      if (role === 'student') router.push('/dashboard/student')
      else router.push('/dashboard/instructor')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className="container mx-auto py-10 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        {/* Role Selection */}
        <div className="flex space-x-4 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === 'student'}
              onChange={() => setRole('student')}
            />
            <span>Student</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="instructor"
              checked={role === 'instructor'}
              onChange={() => setRole('instructor')}
            />
            <span>Instructor</span>
          </label>
        </div>

        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
          Register
        </button>
      </form>
    </div>
  )
}
