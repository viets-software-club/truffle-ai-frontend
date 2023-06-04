import { Fragment, ReactNode, useCallback, useState } from 'react'
import { Column } from '@tanstack/react-table'
import { VscSettings } from 'react-icons/vsc'
import { TbColumns2 } from 'react-icons/tb'
import { AiOutlinePlus, AiOutlineCalendar } from 'react-icons/ai'
import { RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri'
import { Menu, Transition } from '@headlessui/react'
import Button from '@/components/pure/Button'
import { Project } from '@/graphql/generated/gql'
import { Filter } from './Filterbar'
import FilterRow from './FilterRow'

type TopBarProps = {
  columns: Column<Project, unknown>[]
  selectedSortItem: string | null
  nullFunc: () => void
  addFilter: (filter: Filter) => void
  handleSortClick: (item: string) => void
}

const timeFrameOptions = [
  { value: '1_week', label: '1 Week' },
  { value: '4_weeks', label: '4 Weeks' },
  { value: '4_months', label: '4 Months' },
  { value: '1_year', label: '1 Year' }
]

const sortItems = [
  { value: 'Newest', label: 'Newest' },
  { value: 'Most Stars', label: 'Most Stars' },
  { value: 'Most Forks', label: 'Most Forks' },
  { value: 'Fastest Growth', label: 'Fastest Growth' }
]

type TransitionMenuItemsProps = {
  children: ReactNode
}

const TransitionMenuItems = ({ children }: TransitionMenuItemsProps) => (
  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    {children}
  </Transition>
)

const TopBar = ({
  columns,
  selectedSortItem,
  nullFunc,
  addFilter,
  handleSortClick
}: TopBarProps) => {
  const [property, setProperty] = useState('Column')
  const [condition, setCondition] = useState('Condition')
  const [value, setValue] = useState(0)

  // Handle add filter callback
  const handleAddFilter = useCallback(() => {
    addFilter({
      property,
      condition,
      value
    })
    setProperty('Column')
    setCondition('Condition')
    setValue(0)
  }, [property, condition, value, addFilter])

  return (
    <div className="flex h-[60px] flex-row items-center justify-between border-b border-gray-800 px-6">
      {/* Filter, Sort, Edit Columns buttons */}
      <div className="flex flex-row gap-3">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex flex-row items-center space-x-2 rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
              <AiOutlineCalendar color="#858699" />
              <p className="leading-none">This week</p>
            </Menu.Button>
          </div>

          <TransitionMenuItems>
            <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 focus:outline-none">
              <div className="py-1">
                {timeFrameOptions.map((option) => (
                  <Menu.Item key={option.value}>
                    {/* @TODO Change time frame */}
                    <button
                      type="button"
                      className="flex w-44 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
                    >
                      <p className="text-14 text-gray-100">{option.label}</p>
                    </button>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </TransitionMenuItems>
        </Menu>

        <div className="inline-block">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex flex-row items-center space-x-2 rounded-[5px] border border-dashed border-gray-800 px-3 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
                <AiOutlinePlus />
                <p>Add Filter</p>
              </Menu.Button>
            </div>

            <TransitionMenuItems>
              <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 focus:outline-none">
                <div className="py-1">
                  <div className="flex flex-col gap-3 px-4 py-2">
                    <FilterRow
                      property={property}
                      condition={condition}
                      value={value}
                      setProperty={setProperty}
                      setCondition={setCondition}
                      setValue={setValue}
                    />
                    {/* <FilterRow filter={filter} setFilter={handleFilterChange} /> */}
                    <div>
                      <Button variant="highlighted" text="Add" onClick={handleAddFilter} />
                    </div>
                  </div>
                </div>
              </Menu.Items>
            </TransitionMenuItems>
          </Menu>
        </div>

        <div className="flex flex-row gap-3">
          <div className="mb-8 flex flex-row space-x-2">{/* Dropdown */}</div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex flex-row items-center space-x-2 rounded-[5px] border border-gray-800 bg-gray-850 px-3 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
                <VscSettings />

                <p>Sort</p>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 focus:outline-none">
                <div className="px-4 py-3">
                  {sortItems.map((item) => (
                    <Menu.Item key={item.value}>
                      <div
                        className="bg-blue-500 flex items-center text-white"
                        onClick={() => handleSortClick(item.value)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            handleSortClick(item.value)
                          }
                        }}
                        tabIndex={0}
                        role="button"
                      >
                        {selectedSortItem === item.value ? (
                          <RiCheckboxFill className="mr-2" />
                        ) : (
                          <RiCheckboxBlankLine className="mr-2" />
                        )}
                        {item.label}
                      </div>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex flex-row items-center space-x-2 rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
                <TbColumns2 color="#858699" />

                <p className="leading-none">Edit Columns</p>
              </Menu.Button>
            </div>

            <TransitionMenuItems>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 focus:outline-none">
                <div className="py-1">
                  {columns.map((column) => (
                    <Menu.Item key={column.id}>
                      <button
                        type="button"
                        onClick={() => column.toggleVisibility()}
                        className="flex w-44 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
                      >
                        {column.getIsVisible() ? (
                          <RiCheckboxFill className="text-indigo-600" />
                        ) : (
                          <RiCheckboxBlankLine />
                        )}

                        <p
                          className={
                            column.getIsVisible()
                              ? 'text-14 text-gray-100'
                              : 'text-14 text-gray-400'
                          }
                        >
                          {typeof column.columnDef.header === 'string'
                            ? column.columnDef.header
                            : ''}
                        </p>
                      </button>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </TransitionMenuItems>
          </Menu>

          <div className="inline-block">
            <Button
              onClick={nullFunc}
              variant="highlighted"
              text="Add Project"
              Icon={AiOutlinePlus}
              order="ltr"
              iconColor="white"
              textColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
