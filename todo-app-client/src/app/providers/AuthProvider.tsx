import * as React from 'react'
import { createContext, useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from 'shared/auth'

const authContext = createContext({ authed: false })

function useAuth() {
  const { token } = useAuthStore()
  const [authed, setAuthed] = useState(!!token)

  useEffect(() => {
    setAuthed(!!token)
  })

  return { authed }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth()

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { authed } = useAuth()

  const location = useLocation()

  return authed
    ? children
    : <Navigate to="/login" replace state={{ path: location.pathname }} />
}
