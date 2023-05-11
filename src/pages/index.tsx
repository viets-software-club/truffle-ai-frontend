import { Inter } from 'next/font/google'
import RepositoryListView from '@/components/RepositoryListView'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`min-h-screen p-24 ${inter.className} bg-bg-primary text-text-primary`}>
      <RepositoryListView />
    </main>
  )
}
