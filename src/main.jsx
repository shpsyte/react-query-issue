import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // staleTime: Infinity,
      cacheTime: Infinity,
      
    }
  }
}) 

queryClient.invalidateQueries('sw')
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
     <App />
  <ReactQueryDevtools />
  </QueryClientProvider>

)



