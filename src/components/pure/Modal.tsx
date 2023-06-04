import { ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  isInModal?: boolean
}

/**
 * Simple modal (incl. overlay)
 */
const Modal = ({ isOpen, onClose, children, isInModal }: ModalProps) => {
  if (!isOpen) return null
  const modalStyle = isInModal ? '' : 'fixed inset-0 bg-opacity-10'

  return (
    <>
      {/* Overlay */}
      <div
        className={`${modalStyle} z-40  bg-black `}
        onClick={onClose}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onClose()
          }
        }}
        tabIndex={0}
        role="button"
      />

      {/* Modal */}
      <div className="z-50 m-0">
        <div className="absolute bg-gray-850">{children}</div>
      </div>
    </>
  )
}

Modal.defaultProps = {
  isInModal: false
}

export default Modal
