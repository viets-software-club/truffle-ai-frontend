import { Inter } from 'next/font/google'
import LeftSidebar from '@/components/LeftSidebar'

const inter = Inter({ subsets: ['latin'] })

const Documentation = () => (
  <main className={`min-h-screen p-24 ${inter.className} bg-bgPrimary text-textPrimary`}>
    <div className="flex flex-col">
      <LeftSidebar />
      <div className="ml-56 flex flex-col text-textPrimary">Documentation</div>
    </div>
  </main>
)
export default Documentation
