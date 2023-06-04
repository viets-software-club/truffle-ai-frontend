import { useState, useCallback } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import Button from '@/components/pure/Button'
import Modal from '@/components/pure/Modal'

type FilterRowProps = {
  property: string
  condition: string
  value: number
  setProperty: (property: string) => void
  setCondition: (condition: string) => void
  setValue: (value: number) => void
}

const FILTER_PROPERTIES = ['Stars', 'Forks', 'Issues']
const FILTER_CONDITIONS = ['<', '>']

const FilterRow = ({
  property,
  condition,
  value,
  setCondition,
  setProperty,
  setValue
}: FilterRowProps) => {
  const [isPropertyModalOpen, setPropertyModalOpen] = useState(false)
  const [isConditionModalOpen, setConditionModalOpen] = useState(false)

  const onPropertyChange = useCallback(
    (newProperty: string) => {
      setProperty(newProperty)
      setPropertyModalOpen(false)
    },
    [property, setProperty]
  )

  const onConditionChange = useCallback(
    (newCondition: string) => {
      setCondition(newCondition)
      setConditionModalOpen(false)
    },
    [condition, setCondition]
  )

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10))
  }

  return (
    <div className="flex flex-row gap-3">
      <div>
        <Button
          variant="normal"
          text={property}
          Icon={FiChevronDown}
          order="rtl"
          onClick={() => setPropertyModalOpen(true)}
        />
        <Modal isInModal isOpen={isPropertyModalOpen} onClose={() => setPropertyModalOpen(false)}>
          {FILTER_PROPERTIES.map((option) => (
            <Button
              key={option}
              variant="noBorderNoBG"
              text={option}
              fullWidth
              onClick={() => onPropertyChange(option)}
            />
          ))}
        </Modal>
      </div>
      <div>
        <Button
          variant="normal"
          text={condition}
          order="rtl"
          onClick={() => setConditionModalOpen(true)}
          Icon={FiChevronDown}
        />
        <Modal isInModal isOpen={isConditionModalOpen} onClose={() => setConditionModalOpen(false)}>
          {FILTER_CONDITIONS.map((option) => (
            <Button
              key={option}
              variant="noBorderNoBG"
              text={option}
              fullWidth
              onClick={() => onConditionChange(option)}
            />
          ))}
        </Modal>
      </div>
      <input
        type="number"
        value={value}
        onChange={onValueChange}
        className="w-20 rounded-md bg-gray-850 px-2 text-white"
      />
    </div>
  )
}

export default FilterRow
