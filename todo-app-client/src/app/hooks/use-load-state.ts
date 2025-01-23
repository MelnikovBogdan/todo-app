import { useEffect } from 'react'

export const useLoadState = () => {
  // const { fetchCurrencies } = useCurrenciesStore((state) => ({
  //   fetchCurrencies: state.fetchCurrencies
  // }))

  useEffect(() => {
    ;(async () => {
      console.warn('useLoadState')
    })()
  }, [])
}
