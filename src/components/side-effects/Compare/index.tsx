import { useEffect, useState } from 'react'
import { useReactTable, getCoreRowModel, ColumnOrderState } from '@tanstack/react-table'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import Error from '@/components/pure/Error'
import Button from '@/components/pure/Button'
import Loading from '@/components/pure/Loading'
import defaultColumns from '@/components/pure/ProjectsTable/columns'
import Chart from '@/components/page/details/Chart'
import Table from '@/components/page/overview/Table'
import TopBar, { TransitionMenuItems } from '@/components/page/overview/TopBar'
import FilterBar from '@/components/page/overview/FilterBar'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'
import { TableFilter } from '@/components/page/overview/TableFilter'
import { TableSort } from '@/components/page/overview/TableSort'
import { Menu } from '@headlessui/react'

/**
 * Compare projects component
 */
// @TODO Get id from props to fetch category title & projects from DB
const Compare = () => {
  const [filteredRowCount, setFilteredRowCount] = useState(0)
  const [data, setData] = useState<Project[]>([])
  const [columns] = useState(() => [...defaultColumns])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])
  const [filters, setFilters] = useState<TableFilter[]>([])
  const [tableSort, setTableSort] = useState<TableSort | null>(null)
  const [selectedMetric, setSelectedMetric] = useState('Stars')

  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching, error }] = useTrendingProjectsQuery()

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setData(urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[])
    }
  }, [urqlData])

  // Initialize TanStack table
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      columnOrder
    },
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel()
  })

  const addFilter = (filter: TableFilter) => {
    setFilters([...filters, filter])
  }

  const updateFilter = (filter: TableFilter) => {
    setFilters(
      filters.map((f) =>
        f.column.columnDef.header === filter.column.columnDef.header ? filter : f
      )
    )
  }

  const removeFilter = (filter: TableFilter) => {
    setFilters(filters.filter((f) => f !== filter))
  }

  // Display loading/ error messages conditionally
  if (fetching) return <Loading message="Getting saved projects for you..." />
  if (!data || data.length === 0 || error) return <Error />

  return (
    <div className="flex w-full flex-col">
      <TopBar
        columns={table.getAllLeafColumns()}
        addFilter={addFilter}
        filters={filters}
        comparePage
        tableSort={tableSort}
        setTableSort={setTableSort}
      />
      {(filters.length > 0 || tableSort) && (
        <FilterBar
          filters={filters}
          removeFilter={removeFilter}
          updateFilter={updateFilter}
          currentEntries={filteredRowCount}
          totalEntries={data.length}
          tableSort={tableSort}
          setTableSort={setTableSort}
        />
      )}

      <div className="flex flex-row items-center justify-between px-6 pt-3.5">
        <div className="flex flex-col">
          <p className="text-12 font-medium uppercase text-gray-500">Compare</p>
          {/* @TODO Update page title */}
          <h1 className="text-24 font-medium">Infrastructure</h1>
        </div>

        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex h-[30px] flex-row items-center space-x-1 rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
            <FiChevronDown className="text-gray-500" />
            <p className="leading-none">{selectedMetric}</p>
          </Menu.Button>

          <TransitionMenuItems>
            <Menu.Items
              static
              className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-gray-700 shadow-lg focus:outline-none"
            >
              <div className="py-1">
                {['Stars', 'Forks'].map((metric) => (
                  <Menu.Item key={metric}>
                    <button
                      type="button"
                      onClick={() => setSelectedMetric(metric)}
                      className="flex w-44 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
                    >
                      <p>{metric}</p>
                    </button>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </TransitionMenuItems>
        </Menu>
      </div>

      {/* @TODO Remove slice to put all projects into chart */}
      <Chart
        datasets={data.map((project) => ({
          id: project.id as string,
          name: project.name as string,
          data:
            selectedMetric === 'Stars'
              ? (project.starHistory as React.ComponentProps<typeof Chart>['datasets'][0]['data'])
              : (project.forkHistory as React.ComponentProps<typeof Chart>['datasets'][1]['data'])
        }))}
        multipleLines
        selectedMetric={selectedMetric}
      />

      <div className="flex flex-row items-center justify-between px-6 py-3.5">
        <div className="flex flex-col">
          <p className="font-medium">All projects in this category</p>
        </div>
        <div>
          <Button
            variant="normal"
            text="Add project to compare"
            Icon={AiOutlinePlus}
            order="ltr"
            textColor="white"
          />
        </div>
      </div>

      <Table
        table={table}
        filters={filters}
        setFilteredRowCount={setFilteredRowCount}
        tableSort={tableSort}
      />
    </div>
  )
}

export default Compare
