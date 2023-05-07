import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import React from 'react'
import { mockRepositories } from '../constants/repositoryShortMockData'
import { getColumns } from '../constants/tableHelper'
import { IRepositoryShort } from '../types/repositoryShort'

export default function RepositoryListView() {
  const tableData: IRepositoryShort[] = React.useMemo(() => mockRepositories, [])
  const { browseListColumns } = getColumns()
  const table = useReactTable({
    data: tableData,
    columns: browseListColumns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <div className="flex flex-col gap-10 rounded-lg bg-bg-secondary p-8">
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
                <td
                  key={cell.id}
                  className={`${cell.column.id === 'name' ? 'font-bold' : ''} text-text-primary`}
                >
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
