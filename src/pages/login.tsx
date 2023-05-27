import { useState } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useUser, useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import Button from '@/components/pure/Button'
import Error from '@/components/pure/Error'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

const Login = () => {
  const [isError, setIsError] = useState(false)
  const user = useUser()
  const router = useRouter()
  const supabaseClient = useSupabaseClient()
  const { isLoading } = useSessionContext()

  async function signInWithGoogle() {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google'
    })
    if (error) {
      setIsError(true)
    }
  }

  const handleSignInWithGoogle = () => {
    signInWithGoogle().catch(() => setIsError(true))
  }

  if (user) void router.replace('/')

  if (isLoading) return <Loading />

  return (
    <main className={`${inter.className} flex min-h-screen flex-col`}>
      {isError ? (
        <Error title="Error" message="Something went wrong. Please try again." />
      ) : (
        <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
          <div />
          <div className="flex flex-col items-center space-y-4">
            <div className="mb-4 text-36 font-semibold text-gray-100">Welcome to TruffleAI</div>
            <Button
              text="Continue with Google"
              Icon={AiOutlineGoogle}
              order="ltr"
              iconColor="white"
              textColor="white"
              onClick={handleSignInWithGoogle}
              variant="highlighted"
            />
          </div>
          <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
        </div>
      )}
    </main>
  )
}

export default Login