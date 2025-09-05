'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/axiosClient'

export default function StudentRegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/auth/register', { name, email, password, role: 'student' })
      router.push('/auth/student/login')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className="container mx-auto py-10 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Student Register</h1>
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
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
          Register as Student
        </button>
      </form>
    </div>
  )
}
