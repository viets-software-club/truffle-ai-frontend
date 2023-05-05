import { createColumnHelper } from '@tanstack/react-table'
import { IRepositoryShort } from '@/types/repositoryShort'

export function useHandleColumns() {
  const columnHelper = createColumnHelper<IRepositoryShort>()
  const browseListColumns = [
    columnHelper.accessor('name', {
      header: () => 'Name'
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

  return { browseListColumns }
}

export function getCellClassName(columnId: string): string {
  switch (columnId) {
    case 'name':
      return 'bg-blue-400'
    case 'ownerName':
      return 'bg-green-100'
    case 'starCount':
      return 'bg-yellow-100'
    default:
      return ''
  }
}
