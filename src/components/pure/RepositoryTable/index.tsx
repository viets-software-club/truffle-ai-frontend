import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import TopBar from '@/components/page/repositoryTable/TopBar'
import Table from '@/components/page/repositoryTable/Table'
import FilterBar, { Filter } from '@/components/page/repositoryTable/Filterbar'
import columns from '@/components/page/repositoryTable/columns'
import { useState } from 'react'
import repositoriesMock from '@/data/repositoriesMock'

const nullFunc = () => null

const RepositoryTable = () => {
  const [filters, setFilters] = useState<Filter[]>([])
  const [selectedSortItem, setSelectedSortItem] = useState<string | null>(null)

  const table = useReactTable({
    data: repositoriesMock,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  const removeFilter = (filterToRemove: Filter) => {
    setFilters((x) => x.filter((filter) => filter !== filterToRemove))
    console.log(filterToRemove)
  }

  const addFilter = (filter: Filter) => {
    setFilters((x) => [...x, filter])
    console.log(filters)
  }

  const handleSortClick = (item: string) => {
    setSelectedSortItem(item)
  }

  const removeSort = () => {
    setSelectedSortItem(null)
  }

  return (
    <div className="flex w-full flex-col rounded-lg py-3.5">
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
export default RepositoryTable
