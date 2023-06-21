import { useEffect, useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  ColumnOrderState,
  getFilteredRowModel
} from '@tanstack/react-table'
import Error from '@/components/pure/Error'
import Loading from '@/components/pure/Loading'
import TopBar from '@/components/page/overview/TopBar'
import Table from '@/components/page/overview/Table'
import FilterBar from '@/components/page/overview/FilterBar'
import {
  Project,
  ProjectFilter,
  ProjectOrderBy,
  useTrendingProjectsQuery
} from '@/graphql/generated/gql'
import { defaultFilters, defaultSort } from '@/components/page/overview/types'
import createColumns from '@/components/side-effects/ProjectsTable/columns'

/**
 * Table for displaying trending projects
 */
const ProjectsTable = () => {
  const [data, setData] = useState<Project[]>([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])
  const [filters, setFilters] = useState<ProjectFilter>(defaultFilters)
  const [sorting, setSorting] = useState<ProjectOrderBy | null>(defaultSort)

  const updateFilters = (filter: ProjectFilter) => {
    setFilters(filter)
  }

  const [topTenPercent, setTopTenPercent] = useState<{ [key in keyof Project]?: number | null }>({})
  const [bottomTenPercent, setBottomTenPercent] = useState<{
    [key in keyof Project]?: number | null
  }>({})

  const [columns, setColumns] = useState(() => createColumns(bottomTenPercent, topTenPercent))

  const getTopTenPercent = (projects: Project[]) => {
    const numericFields: (keyof Project)[] = [
      'contributorCount',
      'forkCount',
      'issueCount',
      'pullRequestCount',
      'starCount'
    ]

    const result: { [key in keyof Project]?: number | null } = {}

    numericFields.forEach((field) => {
      const sortedData = projects
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        .map((item) => item[field])
        .filter((item): item is number => item !== undefined && item !== null)
        .sort((a, b) => b - a)

      const topTenPercentIndex = Math.ceil(sortedData.length / 10) - 1
      if (topTenPercentIndex >= 0 && sortedData.length > 0) {
        result[field] = sortedData[topTenPercentIndex]
      } else {
        result[field] = null
      }
    })

    return result
  }

  const getBottomTenPercent = (projects: Project[]) => {
    const numericFields: (keyof Project)[] = [
      'contributorCount',
      'forkCount',
      'issueCount',
      'pullRequestCount',
      'starCount'
    ]

    const result: { [key in keyof Project]?: number | null } = {}

    numericFields.forEach((field) => {
      const sortedData = projects
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        .map((item) => item[field])
        .filter((item): item is number => item !== undefined && item !== null)
        .sort((a, b) => a - b)

      const bottomTenPercentIndex = Math.ceil(sortedData.length / 10) - 1
      if (bottomTenPercentIndex >= 0 && sortedData.length > 0) {
        result[field] = sortedData[bottomTenPercentIndex]
      } else {
        result[field] = null
      }
    })

    return result
  }

  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching, error }] = useTrendingProjectsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: filters || defaultFilters
    }
  })

  // Only update table data when urql data changes
  useEffect(() => {
    if (urqlData) {
      setData(urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[])
      setTopTenPercent(
        getTopTenPercent(urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[])
      )
      setBottomTenPercent(
        getBottomTenPercent(
          urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[]
        )
      )
    }
  }, [urqlData])

  useEffect(() => {
    setColumns(() => createColumns(bottomTenPercent, topTenPercent))
  }, [bottomTenPercent, topTenPercent])

  // Initialize TanStack table
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      columnOrder
    },
    enableColumnFilters: true,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })

  return (
    <div className="flex w-full flex-col">
      <TopBar
        columns={table.getAllLeafColumns()}
        filters={filters}
        comparePage={false}
        sorting={sorting}
        setSorting={setSorting}
        updateFilters={updateFilters}
      />

      {(Object.keys(filters).length > 0 || sorting) && (
        <FilterBar
          filters={filters}
          updateFilters={updateFilters}
          currentEntries={data.length}
          totalEntries={data.length} // @TODO get total entries from DB
          sorting={sorting}
          setSorting={setSorting}
        />
      )}

      {fetching && <Loading message="Getting trending projects for you..." />}

      {error && <Error />}

      {data.length === 0 && !error && !fetching && (
        <p className="w-full p-12 text-center text-14 text-gray-300">No projects found</p>
      )}

      {data.length > 0 && !error && <Table table={table} />}
    </div>
  )
}

export default ProjectsTable
