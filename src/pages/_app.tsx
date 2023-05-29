import { cacheExchange, fetchExchange } from 'urql'
import { withUrqlClient } from 'next-urql'
import { AppProps } from 'next/app'
import BASE_URL from '@/constants/baseUrl'
import '@/styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import React, { useState } from 'react'

const App = ({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session
}>) => {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    })
  )
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {React.createElement(Component, pageProps)}
    </SessionContextProvider>
  )
}

export default withUrqlClient(
  () => ({
    url: BASE_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => ({
      headers: {
        Authorization: document.cookie
      }
    })
  }),
  { ssr: false }
)(App)
