import { Inter } from 'next/font/google'
import RepositoryTable from '@/components/RepositoryTable'
import LeftSidebar from '@/components/LeftSidebar'

const inter = Inter({ subsets: ['latin'] })

const savedProjects = () => (
  <main className={`min-h-screen p-24 ${inter.className} bg-bgPrimary text-textPrimary`}>
    <div className="flex flex-col">
      <LeftSidebar />
      <div className="ml-56 flex flex-col text-textPrimary">
        <RepositoryTable />
      </div>
    </div>
  </main>
)
export default savedProjects
