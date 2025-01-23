import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
  token: string | undefined
}

interface Actions {
  setToken: (token: string) => void
  clearToken: () => void
}

type AuthStore = State & Actions

const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      token: undefined,
      setToken: token => set({ token }),
      clearToken: () => set({ token: undefined }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useAuthStore
