import { queryClient } from '@/services/query-client'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />

      <ToastContainer />
    </QueryClientProvider>
  )
}
