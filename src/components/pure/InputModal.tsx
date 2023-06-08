import { ReactNode } from 'react'
import Button from '@/components/pure/Button'
import { AiOutlineClose } from 'react-icons/ai'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  modalHeader: string
}

/**
 * Simple modal (incl. overlay)
 */
const InputModal = ({ isOpen, onClose, children, modalHeader }: ModalProps) => {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="absolute right-4 top-20 w-96">
        <div className="rounded-lg bg-gray-600 p-6 shadow-lg">
          <div className="float-right flex">
            <Button onClick={onClose} variant="onlyIconNoBorderNoBG" Icon={AiOutlineClose} />
          </div>
          <h2 className="mb-4 text-lg font-bold text-white">{modalHeader}</h2>
          {children}
        </div>
      </div>
    </>
  )
}

export default InputModal
