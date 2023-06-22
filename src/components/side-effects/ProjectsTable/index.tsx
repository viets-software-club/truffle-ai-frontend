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

// Constants
const NUMERIC_FIELDS = [
  'contributorCount',
  'forkCount',
  'issueCount',
  'pullRequestCount',
  'starCount'
]

// Utility Functions
const getPercentileValue = (projects: Project[], percentile: number, sortDescending = true) => {
  const result = {}
  NUMERIC_FIELDS.forEach((field) => {
    const sortedData = projects
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      .map((item) => item[field])
      .filter((item) => !!item)
      .sort((a, b) => (sortDescending ? b - a : a - b))

    const percentileIndex = Math.floor(sortedData.length * percentile)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    result[field] =
      percentileIndex < sortedData.length && sortedData.length > 0
        ? sortedData[percentileIndex]
        : null
  })

  return result
}

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

  const [percentileStats, setPercentileStats] = useState({
    topTenPercent: {},
    topTwentyPercent: {},
    bottomTenPercent: {},
    bottomTwentyPercent: {}
  })

  const { topTenPercent, topTwentyPercent, bottomTenPercent, bottomTwentyPercent } = percentileStats

  const [columns, setColumns] = useState(() =>
    createColumns(bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent)
  )

  // Fetch data from Supabase using generated Urql hook
  const [{ data: urqlData, fetching, error }] = useTrendingProjectsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: filters || defaultFilters
    }
  })

  // Effect Hooks
  useEffect(() => {
    if (urqlData) {
      const projectData = urqlData?.projectCollection?.edges?.map((edge) => edge.node) as Project[]
      setData(projectData)

      setPercentileStats({
        topTenPercent: getPercentileValue(projectData, 0.1),
        bottomTenPercent: getPercentileValue(projectData, 0.1, false),
        topTwentyPercent: getPercentileValue(projectData, 0.2),
        bottomTwentyPercent: getPercentileValue(projectData, 0.2, false)
      })
    }
  }, [urqlData])

  useEffect(() => {
    setColumns(() =>
      createColumns(bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent)
    )
  }, [bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent])

  useEffect(() => {
    setColumns(() =>
      createColumns(bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent)
    )
  }, [bottomTenPercent, topTenPercent, topTwentyPercent, bottomTwentyPercent])

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
    <>
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

      <div className="flex w-full flex-col pt-[120px]">
        {fetching && <Loading />}

        {error && <Error />}

        {data.length === 0 && !error && !fetching && (
          <p className="w-full p-12 text-center text-14 text-gray-300">No projects found</p>
        )}

        {data.length > 0 && !error && <Table table={table} />}
      </div>
    </>
  )
}

export default ProjectsTable
