'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/axiosClient'

export default function InstructorLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await api.post('/auth/login', { email, password, role: 'instructor' })
      localStorage.setItem('token', res.data.token)
      router.push('/dashboard/instructor')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="container mx-auto py-10 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Instructor Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
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
        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">
          Login as Instructor
        </button>
      </form>
    </div>
  )
}
