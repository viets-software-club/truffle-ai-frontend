import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'
import Error from '@/components/pure/Error'
import Button from '@/components/pure/Button'
import Loading from '@/components/pure/Loading'
import columns from '@/components/pure/ProjectsTable/columns'
import Chart from '@/components/page/details/Chart'
import Table from '@/components/page/overview/Table'
import TopBar from '@/components/page/overview/TopBar'
import FilterBar, { Filter } from '@/components/page/overview/Filterbar'
import Page from '@/components/side-effects/Page'
import { useState } from 'react'

const nullFunc = () => null

/**
 * Compare projects page
 */
// @TODO Get id from url, fetch data from API & display real data
const Compare = () => {
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

  // Display loading/ error messages conditionally
  if (fetching) return <Loading message="Getting trending projects for you..." />
  if (!projects || projects.length === 0 || error) return <Error />

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
    <Page>
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

        <div className="flex flex-row items-center justify-between px-6 pt-3.5">
          <div className="flex flex-col">
            <p className="text-12 font-medium uppercase text-gray-500">Compare</p>
            {/* @TODO Update page title */}
            <h1 className="text-24 font-medium">Infrastructure</h1>
          </div>

          <div>
            <Button
              onClick={nullFunc}
              variant="normal"
              text="Stars"
              Icon={FiChevronDown}
              order="ltr"
              textColor="white"
            />
          </div>
        </div>

        {/* @TODO Remove slice to put all projects into chart */}
        <Chart
          datasets={projects
            .map((project) => ({
              id: project.id as string,
              name: project.name as string,
              data: project.starHistory as React.ComponentProps<typeof Chart>['datasets'][0]['data']
            }))
            .slice(0, 1)}
        />

        <div className="flex flex-row items-center justify-between px-6 py-3.5">
          <div className="flex flex-col">
            <p className="font-medium">All projects in this category</p>
          </div>

          <div>
            <Button
              onClick={nullFunc}
              variant="normal"
              text="Add project to compare"
              Icon={AiOutlinePlus}
              order="ltr"
              textColor="white"
            />
          </div>
        </div>

        <Table table={table} />
      </div>
    </Page>
  )
}

export default Compare
