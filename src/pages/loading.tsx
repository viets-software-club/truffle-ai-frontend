/* eslint-disable no-console */

import { Inter } from 'next/font/google'
import router from 'next/router'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Loading = () => {
  const [progress, setProgress] = useState(0)
  async function navigate() {
    await router.push('/overview')
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          navigate().then(
            () => {
              console.log('Navigation successful!')
            },
            () => {
              console.error('Navigation failed with error:')
            }
          )
          return 100
        }
        return oldProgress + 0.5
      })
    }, 30)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <main className={`${inter.className} flex min-h-screen flex-col`}>
      <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
        <div />
        <div className="flex flex-col items-center">
          <div className="mb-4 text-36 font-semibold text-textPrimary">TruffleAI</div>
          <div className="h-1 w-48 overflow-hidden rounded-full bg-border">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-icon transition-all ease-out"
            />
          </div>
        </div>
        <div className="self-center pb-4 text-12 text-textSecondary">
          © 2023 La Famiglia x Rostlab
        </div>
      </div>
    </main>
  )
}
export default Loading
