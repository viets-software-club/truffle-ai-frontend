import { FiX } from 'react-icons/fi'

export type Filter = {
  property: string
  condition: string
  value: number
}

type FilterBarProps = {
  filters: Filter[]
  selectedSortItem: string | null
  removeFilter: (filterToRemove: Filter) => void
  removeSort: () => void
}

const FilterBar = ({ filters, selectedSortItem, removeFilter, removeSort }: FilterBarProps) => {
  const filterText = (filter: Filter) => {
    const { property, condition, value } = filter
    return `${property} ${condition} ${value}`
  }

  return (
    <div className="flex flex-row justify-between border-b border-gray-800 px-6 py-2.5">
      <div className="flex flex-row gap-3">
        {' '}
        {filters.map((filter) => (
          <div
            key={`${filter.property}-${filter.condition}-${filter.value}`}
            className="flex items-center rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 transition-colors duration-100 hover:bg-gray-700"
          >
            <p className="text-14 text-gray-300">{filterText(filter)}</p>
            <FiX onClick={() => removeFilter(filter)} className="ml-1 text-gray-400" />
          </div>
        ))}
        {selectedSortItem && (
          <div className="flex items-center rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 transition-colors duration-100 hover:bg-gray-700">
            <p className="text-14 text-gray-300">{selectedSortItem}</p>
            <FiX onClick={() => removeSort()} className="ml-1 text-gray-400" />
          </div>
        )}
      </div>

      <div className="flex flex-row items-center">
        <p className="text-14">10</p>
        <p className="text-14 text-gray-500">/25</p>
      </div>
    </div>
  )
}

export default FilterBar
