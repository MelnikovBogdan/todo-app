import { RequireAuth } from 'app/providers/AuthProvider'
import { RegisterPage } from 'pages/register'
import RootPage from 'pages/root'

import { SignInPage } from 'pages/sign-in'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <RequireAuth>
              <RootPage />
            </RequireAuth>
          )}
        />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
