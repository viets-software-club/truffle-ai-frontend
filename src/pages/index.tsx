import { Inter } from 'next/font/google'
import RepositoryListView from '@/pages/RepositoryListView'

const inter = Inter({ subsets: ['latin'] })

export default function Home()
{
  return (
    <main className={`min-h-screen p-24 ${inter.className}`}>
      <RepositoryListView />
    </main>
  )
}