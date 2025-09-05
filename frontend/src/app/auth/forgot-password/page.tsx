'use client'

import { useState } from 'react'
import api from '@/lib/axiosClient'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/auth/forgot-password', { email })
      setMessage('Check your email for reset instructions.')
    } catch (err) {
      setMessage('Failed to send reset email.')
    }
  }

  return (
    <div className="container mx-auto py-10 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-yellow-600 text-white rounded">
          Send Reset Link
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  )
}
