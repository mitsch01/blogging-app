import React from "react"
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa"

function Modal({ isOpen, onClose, images, currentIndex, onPrev, onNext }) {
  if (!isOpen) return null

  // Function to handle click events on the overlay
  const handleOverlayClick = e => {
    // Close the modal only if the click is outside the image
    if (e.target.classList.contains("modal-overlay")) {
      onClose()
    }
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 modal-overlay' onClick={handleOverlayClick}>
      <div className='relative max-w-2xl max-h-screen mx-auto my-auto'>
        <button onClick={onClose} className='absolute top-4 right-4 text-white text-2xl z-10'>
          <FaTimes />
        </button>
        <button onClick={onPrev} className='absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl z-10'>
          <FaArrowLeft />
        </button>
        <button onClick={onNext} className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl z-10'>
          <FaArrowRight />
        </button>
        <img src={images[currentIndex]} alt={`Gallery image ${currentIndex + 1}`} className='w-auto max-w-full max-h-screen mx-auto my-auto' />
      </div>
    </div>
  )
}

export default Modal
