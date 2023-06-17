import { ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

/**
 * Simple modal (incl. overlay)
 */
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay: a semi-transparent black background that covers the whole page */}
      <div
        className="fixed inset-0 z-40 bg-black opacity-10"
        onClick={onClose}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onClose()
          }
        }}
        tabIndex={0}
        // Treat the overlay as a button for accessibility purposes
        role="button"
        aria-label="Close Modal"
      />

      {/* Modal */}
      <div className="z-50 m-0" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="absolute bg-gray-850">
          <h2 id="modal-title" className="sr-only">
            Modal Title
          </h2>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
