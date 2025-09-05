import jwtDecode from 'jwt-decode'

interface JwtPayload {
  id: string
  email: string
  name: string
  role: 'student' | 'instructor'
  exp: number
}

export const decodeToken = (token: string): JwtPayload | null => {
  try {
    return jwtDecode<JwtPayload>(token)
  } catch (err) {
    console.error('Invalid token')
    return null
  }
}

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token)
  if (!decoded) return true
  return decoded.exp * 1000 < Date.now()
}

