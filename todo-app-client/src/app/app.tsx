import { AuthProvider } from 'app/providers/AuthProvider'
import RouterProvider from 'app/providers/RouterProvider'

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider />
    </AuthProvider>
  )
}
