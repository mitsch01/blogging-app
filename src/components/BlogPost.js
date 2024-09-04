import React, { useState } from "react"
import { useParams } from "react-router-dom"
import blogPosts from "../blogPosts.json"
import Modal from "./Modal"

function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(post => post.id === parseInt(id, 10))

  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!post) {
    return <p>Post not found.</p>
  }

  const images = Array.from({ length: 6 }, (_, index) => `/images/blog${post.id}-${index + 1}.jpg`)

  const openModal = index => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const showPrevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const showNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className='py-20 bg-gray-100'>
      {/* Title Image */}
      <div className='relative w-full mb-8'>
        <img src={`/images/blog${post.id}-title.jpg`} alt={post.title} className='w-full h-auto object-cover' />
      </div>
      <div className='container mx-auto px-4 max-w-6xl m-24'>
        {/* Title */}
        <h1 className='text-4xl font-extrabold mb-12'>{post.title}</h1>
        {/* Content */}
        <p className='text-lg mb-24'>{post.content}</p>
        {/* Gallery */}
        <div className='grid grid-cols-2 gap-4'>
          {images.map((src, index) => (
            <div key={index} className='relative aspect-w-1 aspect-h-1 cursor-pointer' onClick={() => openModal(index)}>
              <img src={src} alt={`Gallery image ${index + 1}`} className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} images={images} currentIndex={currentImageIndex} onPrev={showPrevImage} onNext={showNextImage} />
    </section>
  )
}

export default BlogPost
