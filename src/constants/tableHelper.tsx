import { createColumnHelper } from '@tanstack/react-table'
import { IRepositoryShort } from '@/types/repositoryShort'

export function getColumns() {
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
      header: () => 'Programming Language',
      cell: (info) => <div className="text-sky-300">{info.getValue()}</div>
    }),
    columnHelper.accessor('category', {
      header: () => 'Category'
    })
  ]

  return { browseListColumns }
}
