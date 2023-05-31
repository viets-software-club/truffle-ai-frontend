import React, { useState } from 'react'

interface Filter {
  type: string
  filterType: string
  filterValue: string | number
}
const MyComponent: React.FC = () => {
  const [selectedSortOptions, setSelectedSortOptions] = useState<string[]>([])
  const [sortResult, setSortResult] = useState<string[]>([])
  const [showSortWindow, setShowSortWindow] = useState(false)

  const openSortWindow = () => {
    setShowSortWindow(true)
  }
  const closeSortWindow = () => {
    setShowSortWindow(false)
  }
  const handleOptionToggle = (option: string) => {
    if (selectedSortOptions.includes(option)) {
      setSelectedSortOptions(selectedSortOptions.filter((item) => item !== option))
    } else {
      setSelectedSortOptions([...selectedSortOptions, option])
    }
  }

  const handleSortFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSortResult(selectedSortOptions)
    setShowSortWindow(false)
  }

  const [showFilterWindow, setShowFilterWindow] = useState(false)
  const [filters, setFilters] = useState<Filter[]>([])
  const [filterResult, setFilterResult] = useState<Filter[]>([])

  const openFilterWindow = () => {
    setShowFilterWindow(true)
  }
  const closeFilterWindow = () => {
    setShowFilterWindow(false)
  }

  const addFilter = (type: string, filterType: string, filterValue: string | number) => {
    setFilters((prevFilters) => [...prevFilters, { type, filterType, filterValue }])
  }

  const handleNameOption = () => {
    addFilter('name', '', '')
  }

  const removeFilter = (index: number) => {
    setFilters((prevFilters) => prevFilters.filter((_, i) => i !== index))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const validFilters = filters.filter(
      (filter) => filter.type && filter.filterType && filter.filterValue !== ''
    )
    setFilterResult([...validFilters])
  }

  const [selectedEditOptions, setSelectedEditOptions] = useState<string[]>([])
  const [editResult, setEditResult] = useState<string[]>([])
  const [showEditWindow, setShowEditWindow] = useState(false)

  const openEditWindow = () => {
    setShowEditWindow(true)
  }
  const closeEditWindow = () => {
    setShowEditWindow(false)
  }
  const handleEditOptionToggle = (option: string) => {
    if (selectedEditOptions.includes(option)) {
      setSelectedEditOptions(selectedEditOptions.filter((item) => item !== option))
    } else {
      setSelectedEditOptions([...selectedEditOptions, option])
    }
  }

  const handleEditFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setEditResult(selectedEditOptions)
    setShowEditWindow(false)
  }

  const [isExpanded, setIsExpanded] = useState(false)

  const handleSearchBarClick = () => {
    setIsExpanded(true)
  }

  const handleSearchBarBlur = () => {
    setIsExpanded(false)
  }

  const windowStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '20px',
    zIndex: '9999',
    height: '300px',
    width: '300px'
  }

  const filterWindowStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '20px',
    zIndex: '9999',
    height: '600px',
    width: '300px'
  }
  return (
    <main>
      {/* 1. buttons */}
      <div className="button-container">
        <input
          type="text"
          style={{
            width: isExpanded ? '200px' : '100px',
            transition: 'width 0.3s ease-in-out',
            padding: '5px'
          }}
          placeholder="Search"
          onClick={handleSearchBarClick}
          onBlur={handleSearchBarBlur}
        />
        <br />
        <button
          type="button"
          style={{
            backgroundColor: 'grey',
            color: 'white',
            padding: '5px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
          onClick={openSortWindow}
        >
          sort
        </button>
        <button
          type="button"
          style={{
            backgroundColor: 'grey',
            color: 'white',
            padding: '5px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
          onClick={openFilterWindow}
        >
          filter
        </button>

        <button
          type="button"
          style={{
            backgroundColor: 'grey',
            color: 'white',
            padding: '5px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
          onClick={openEditWindow}
        >
          edit columns
        </button>
      </div>

      {/* 2. display selected sort and filter options */}
      <div>
        {sortResult.length > 0 && (
          <div>
            <h3 style={{ color: 'white' }}>Selected Sortings:</h3>
            <ul>
              {sortResult.map((option) => (
                <li style={{ color: 'white' }} key={option}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {filterResult.length > 0 && (
        <div>
          <h3 style={{ color: 'white' }}>Selected filters: </h3>
          <ul>
            {filterResult.map((filter) => (
              <li
                style={{ color: 'white' }}
              >{`${filter.type} ${filter.filterType} ${filter.filterValue}`}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        {editResult.length > 0 && (
          <div>
            <h3 style={{ color: 'white' }}>Selected columns:</h3>
            <ul>
              {editResult.map((option) => (
                <li style={{ color: 'white' }} key={option}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 3. popup windows */}
      {/* 3.1 popup window for sort */}
      <div className="window-container">
        {showSortWindow && (
          <div style={windowStyle}>
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer'
              }}
              onClick={closeSortWindow}
            >
              X
            </button>
            <form onSubmit={handleSortFormSubmit}>
              <label htmlFor="newest">
                <input
                  id="newest"
                  type="checkbox"
                  checked={selectedSortOptions.includes('Newest')}
                  onChange={() => handleOptionToggle('Newest')}
                />
                Newest
              </label>
              <br />
              <label htmlFor="fastest growth">
                <input
                  id="fastest growth"
                  type="checkbox"
                  checked={selectedSortOptions.includes('Fastest growth')}
                  onChange={() => handleOptionToggle('Fastest growth')}
                />
                Fastest Growth
              </label>
              <br />
              <label htmlFor="most stars">
                <input
                  id="most stars"
                  type="checkbox"
                  checked={selectedSortOptions.includes('Most stars')}
                  onChange={() => handleOptionToggle('Most stars')}
                />
                Most Stars
              </label>
              <br />
              <label htmlFor="most forks">
                <input
                  id="most forks"
                  type="checkbox"
                  checked={selectedSortOptions.includes('Most forks')}
                  onChange={() => handleOptionToggle('Most forks')}
                />
                Most Forks
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
        {/* 3.2 popup window for filter */}
        {showFilterWindow && (
          <div style={filterWindowStyle}>
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer'
              }}
              onClick={closeFilterWindow}
            >
              X
            </button>
            {filters.map((filter, index) => (
              <div>
                <select
                  value={filter.type}
                  onChange={(e) => {
                    const newFilters = [...filters]
                    newFilters[index].type = e.target.value
                    setFilters(newFilters)
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="name">Name</option>
                  <option value="star">Star</option>
                  <option value="tags">Tags</option>
                </select>

                {filter.type === 'name' && (
                  <div>
                    <select
                      value={filter.filterType}
                      onChange={(e) => {
                        const newFilters = [...filters]
                        newFilters[index].filterType = e.target.value
                        setFilters(newFilters)
                      }}
                    >
                      <option value="">Select a filter type</option>
                      <option value="contains">contains</option>
                      <option value="does not contain">does not Contain</option>
                      <option value="starts with">starts with</option>
                      <option value="ends with">ends with</option>
                    </select>
                    <input
                      type="text"
                      value={filter.filterValue as string}
                      onChange={(e) => {
                        const newFilters = [...filters]
                        newFilters[index].filterValue = e.target.value
                        setFilters(newFilters)
                      }}
                      placeholder="Enter a string"
                    />
                  </div>
                )}

                {filter.type === 'star' && (
                  <div>
                    <select
                      value={filter.filterType}
                      onChange={(e) => {
                        const newFilters = [...filters]
                        newFilters[index].filterType = e.target.value
                        setFilters(newFilters)
                      }}
                    >
                      <option value="">Select a filter type</option>
                      <option value=">">Greater than</option>
                      <option value="<">Less than</option>
                    </select>
                    <input
                      type="number"
                      value={filter.filterValue as number}
                      onChange={(e) => {
                        const newFilters = [...filters]
                        newFilters[index].filterValue = Number(e.target.value)
                        setFilters(newFilters)
                      }}
                      placeholder="Enter a number"
                    />
                  </div>
                )}

                {filter.type === 'tags' && (
                  <div>
                    <select
                      value={filter.filterType}
                      onChange={(e) => {
                        const newFilters = [...filters]
                        newFilters[index].filterType = e.target.value
                        setFilters(newFilters)
                      }}
                    >
                      <option value="">Select a filter type</option>
                      <option value="contains">Contains</option>
                      <option value="does not contain">Does not Contain</option>
                    </select>
                    <select
                      value={filter.filterValue as string}
                      onChange={(e) => {
                        const newFilters = [...filters]
                        newFilters[index].filterValue = e.target.value
                        setFilters(newFilters)
                      }}
                    >
                      <option value="">Select a tag</option>
                      <option value="Machine learning">Machine learning</option>
                      <option value="Development tools">Development tools</option>
                      <option value="Artificial intelligence">Artificial intelligence</option>
                    </select>
                  </div>
                )}

                <button type="button" onClick={() => removeFilter(index)}>
                  Remove Filter
                </button>
              </div>
            ))}

            <div>
              <button type="button" onClick={handleNameOption}>
                Add Filter
              </button>
            </div>

            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}

        {/* 3.1 popup window for edit columns */}
        {showEditWindow && (
          <div style={windowStyle}>
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer'
              }}
              onClick={closeEditWindow}
            >
              X
            </button>
            <form onSubmit={handleEditFormSubmit}>
              <label htmlFor="stars">
                <input
                  id="stars"
                  type="checkbox"
                  checked={selectedEditOptions.includes('Stars')}
                  onChange={() => handleEditOptionToggle('Stars')}
                />
                Growth
              </label>
              <br />
              <label htmlFor="growth">
                <input
                  id="growth"
                  type="checkbox"
                  checked={selectedEditOptions.includes('Growth')}
                  onChange={() => handleEditOptionToggle('Growth')}
                />
                Growth
              </label>
              <br />
              <label htmlFor="issues">
                <input
                  id="issues"
                  type="checkbox"
                  checked={selectedEditOptions.includes('Issues')}
                  onChange={() => handleEditOptionToggle('Issues')}
                />
                Issues
              </label>
              <br />
              <label htmlFor="forks">
                <input
                  id="forks"
                  type="checkbox"
                  checked={selectedEditOptions.includes('Forks')}
                  onChange={() => handleEditOptionToggle('Forks')}
                />
                Forks
              </label>
              <br />
              <label htmlFor="name">
                <input
                  id="name"
                  type="checkbox"
                  checked={selectedEditOptions.includes('Name')}
                  onChange={() => handleEditOptionToggle('Name')}
                />
                Name
              </label>
              <br />
              <label htmlFor="contributors">
                <input
                  id="contributors"
                  type="checkbox"
                  checked={selectedEditOptions.includes('Contributors')}
                  onChange={() => handleEditOptionToggle('Contributors')}
                />
                Contributors
              </label>
              <br />
              <label htmlFor="contr./issue">
                <input
                  id="contr./issue"
                  type="checkbox"
                  checked={selectedEditOptions.includes('Contr./Issue')}
                  onChange={() => handleEditOptionToggle('Contr./Issue')}
                />
                Contr./Issue
              </label>
              <br />
              <label htmlFor="website">
                <input
                  id="website"
                  type="checkbox"
                  checked={selectedEditOptions.includes('Website')}
                  onChange={() => handleEditOptionToggle('Website')}
                />
                Website
              </label>
              <br />
              <label htmlFor="tags">
                <input
                  id="tags"
                  type="checkbox"
                  checked={selectedEditOptions.includes('Tags')}
                  onChange={() => handleEditOptionToggle('Tags')}
                />
                Tags
              </label>
              <br />
              <label htmlFor="forks./contr.">
                <input
                  id="forks./contr."
                  type="checkbox"
                  checked={selectedEditOptions.includes('Forks./Contr.')}
                  onChange={() => handleEditOptionToggle('Forks./Contr.')}
                />
                Forks./Contr.
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}

export default MyComponent
