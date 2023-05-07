import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import React from 'react'
import { mockRepositories } from '../constants/repositoryShortMockData'
import { useHandleColumns, getCellClassName } from '../hooks/useHandleColumns'
import { IRepositoryShort } from '../types/repositoryShort'

export default function RepositoryListView() {
  const tableData: IRepositoryShort[] = React.useMemo(() => mockRepositories, [])
  const { browseListColumns } = useHandleColumns()
  const table = useReactTable({
    data: tableData,
    columns: browseListColumns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={getCellClassName(cell.column.id)}>
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
