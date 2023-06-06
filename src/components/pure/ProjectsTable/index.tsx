import { useState } from 'react'
import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import Table from '@/components/page/overview/Table'
import TopBar from '@/components/page/overview/TopBar'
import columns from '@/components/pure/ProjectsTable/columns'
import FilterBar, { Filter } from '@/components/page/overview/Filterbar'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'

const nullFunc = () => null

/**
 * Table for displaying trending projects
 */
const ProjectsTable = () => {
  // Fetch data from Supabase using generated Urql hook
  const [{ data, fetching, error }] = useTrendingProjectsQuery()
  const projects = data?.projectCollection?.edges?.map((edge) => edge.node) as Project[]

  const [filters, setFilters] = useState<Filter[]>([])
  const [selectedSortItem, setSelectedSortItem] = useState<string | null>(null)

  // Initialize TanStack table
  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  const removeFilter = (filterToRemove: Filter) => {
    setFilters((x) => x.filter((filter) => filter !== filterToRemove))
  }

  const addFilter = (filter: Filter) => {
    setFilters((x) => [...x, filter])
  }

  const handleSortClick = (item: string) => {
    setSelectedSortItem(item)
  }

  const removeSort = () => {
    setSelectedSortItem(null)
  }

  // Display loading/ error messages conditionally
  if (fetching) return <Loading message="Getting trending projects for you..." />
  if (!projects || projects.length === 0 || error) return <Error />

  return (
    <div className="flex w-full flex-col">
      <TopBar
        columns={table.getAllLeafColumns()}
        selectedSortItem={selectedSortItem}
        nullFunc={nullFunc}
        addFilter={addFilter}
        handleSortClick={handleSortClick}
      />
      <FilterBar
        filters={filters}
        selectedSortItem={selectedSortItem}
        removeFilter={removeFilter}
        removeSort={removeSort}
      />
      <Table table={table} />
    </div>
  )
}

export default ProjectsTable
