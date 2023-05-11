import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper
} from '@tanstack/react-table'
import React from 'react'
import {
  AiOutlineFork,
  AiOutlineStar,
  BiGitPullRequest,
  BsPeople,
  VscIssues
} from 'react-icons/all'
import ProgrammingLanguageIconRenderer from '@/components/ProgrammingLanguageIconRenderer'
import { mockRepositories } from '../constants/repositoryShortMockData'
import { IRepositoryShort } from '../constants/repositoryShort'

export default function RepositoryListView() {
  // REACT TABLE
  const tableData: IRepositoryShort[] = React.useMemo(() => mockRepositories, [])
  const columnHelper = createColumnHelper<IRepositoryShort>()
  const browseListColumns = [
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: (info) => <p className="font-bold">{info.getValue()}</p>
    }),
    columnHelper.accessor('ownerName', {
      header: () => 'Owner Name'
    }),
    columnHelper.accessor('starCount', {
      header: () => 'Stars',
      cell: (info) => (
        <div className="flex flex-row items-center space-x-1 text-green">
          <AiOutlineStar />
          <p>{info.getValue()}</p>
        </div>
      )
    }),
    columnHelper.accessor('forkCount', {
      header: () => 'Forks',
      cell: (info) => (
        <div className="flex flex-row items-center space-x-1 text-red">
          <AiOutlineFork />
          <p>{info.getValue()}</p>
        </div>
      )
    }),
    columnHelper.accessor('issueCount', {
      header: 'Issues',
      cell: (info) => (
        <div className="flex flex-row items-center space-x-1">
          <VscIssues />
          <p>{info.getValue()}</p>
        </div>
      )
    }),
    columnHelper.accessor('contributorCount', {
      header: 'Contributors',
      cell: (info) => (
        <div className="flex flex-row items-center space-x-1">
          <BsPeople />
          <p>{info.getValue()}</p>
        </div>
      )
    }),
    columnHelper.accessor('pullRequestCount', {
      header: () => 'Pull Requests',
      cell: (info) => (
        <div className="flex flex-row items-center space-x-1">
          <BiGitPullRequest />
          <p>{info.getValue()}</p>
        </div>
      )
    }),
    columnHelper.accessor('programmingLanguage', {
      header: () => 'Programming Language',
      cell: (info) => <ProgrammingLanguageIconRenderer programmingLanguage={info.getValue()} />
    }),
    columnHelper.accessor('category', {
      header: () => 'Category',
      cell: (info) => (
        <p className="text-color-text-primary inline-block rounded-lg border border-border-color bg-bg-secondary-highlighted p-1.5 text-xs">
          {info.getValue()}
        </p>
      )
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
            <tr
              key={row.id}
              className="hover:bg-bg-secondary-highlighted"
              onClick={() => alert('This will soon open up a detail view page!')}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 text-left text-text-primary">
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
