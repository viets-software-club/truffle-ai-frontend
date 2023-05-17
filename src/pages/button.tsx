import { useState } from 'react'

interface Option {
  id: number
  value: string
  label: string
  subOptions: string[]
}

const options: Option[] = [
  {
    id: 1,
    value: 'apple',
    label: 'Apple',
    subOptions: ['apple 1', 'apple 2']
  },
  {
    id: 2,
    value: 'pear',
    label: 'Pear',
    subOptions: ['pear 1', 'pear 2']
  },
  {
    id: 3,
    value: 'peach',
    label: 'Peach',
    subOptions: ['peach 1', 'peach 2']
  }
]

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleAddFilter = () => {
    setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, '', ''])
  }

  const handleOptionChange = (index: number, value: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions]
      newSelectedOptions[index] = value
      return newSelectedOptions
    })
  }

  const handleSubmit = () => {
    const result: string[] = []
    for (let i = 0; i < selectedOptions.length; i += 2) {
      const option = selectedOptions[i]
      const subOption = selectedOptions[i + 1]
      if (option && subOption) {
        result.push(`${option}: ${subOption}`)
      }
    }
    alert(result.join(', '))
  }

  return (
    <div>
      <h1>Add Filters</h1>
      <button type="button" onClick={handleAddFilter}>
        Add Filter
      </button>
      {selectedOptions.map((selectedOption, index) => {
        // whether the select element is the second one or not. Parent select option is index/2. EveryOption, including
        // suboptions has a unique number.
        const isSecondSelect = index % 2 === 1
        const parentSelectIndex = Math.floor(index / 2)
        const parentSelectValue = selectedOptions[parentSelectIndex * 2]
        const key = isSecondSelect ? `second_${index}` : `first_${index}`

        return (
          <div key={key}>
            {isSecondSelect && parentSelectValue && (
              <select
                value={selectedOption}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              >
                <option value="">Select an option</option>
                {options
                  .find((o) => o.value === parentSelectValue)
                  ?.subOptions.map((subOption) => (
                    <option key={subOption} value={subOption}>
                      {subOption}
                    </option>
                  ))}
              </select>
            )}
            {!isSecondSelect && (
              <select
                value={selectedOption}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              >
                <option value="">Select an option</option>
                {options.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        )
      })}
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default App
