import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper
} from '@tanstack/react-table'
import React from 'react'
import { mockRepositories } from '../constants/repositoryShortMockData'
import { IRepositoryShort } from '../constants/repositoryShort'

export default function RepositoryListView() {
  // REACT TABLE
  const tableData: IRepositoryShort[] = React.useMemo(() => mockRepositories, [])
  const columnHelper = createColumnHelper<IRepositoryShort>()
  const browseListColumns = [
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: (info) => <div className="font-bold">{info.getValue()}</div>
    }),
    columnHelper.accessor('ownerName', {
      header: () => 'Owner Name'
    }),
    columnHelper.accessor('starCount', {
      header: () => 'Stars'
    }),
    columnHelper.accessor('forkCount', {
      header: () => 'Forks'
    }),
    columnHelper.accessor('issueCount', {
      header: 'Issues'
    }),
    columnHelper.accessor('contributorCount', {
      header: 'Contributors'
    }),
    columnHelper.accessor('pullRequestCount', {
      header: () => 'Pull Requests'
    }),
    columnHelper.accessor('programmingLanguage', {
      header: () => 'Programming Language'
    }),
    columnHelper.accessor('category', {
      header: () => 'Category'
    })
  ]
  const table = useReactTable({
    data: tableData,
    columns: browseListColumns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <div className="flex flex-col rounded-lg bg-bg-secondary p-8">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="text-left font-light text-text-secondary">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-text-primary">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* We are not using Footers for now */}
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  )
}
