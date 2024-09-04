import React, { useState } from "react"
import blogPosts from "../blogPosts.json"

function BlogGallery() {
  const images = require.context("../images", false, /\.(png|jpe?g|svg)$/) 

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? blogPosts.length - 3 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === blogPosts.length - 3 ? 0 : prevIndex + 1))
  }

  return (
    <section id='BlogGallery' className='py-20 bg-white'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-12'>Latest Blog Posts</h2>

        <div className='flex justify-center items-center space-x-4'>
          {/* Left Arrow */}
          <button onClick={handlePrev} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>
            &lt;
          </button>

          {/* Blog Post Cards */}
          <div className='flex space-x-4'>
            {blogPosts.slice(currentIndex, currentIndex + 3).map(post => (
              <div key={post.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
                <img src={images(`./blog${post.id}.jpg`)} alt={`Blog ${post.id}`} />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{post.title}</div>
                  <p className='text-gray-700 text-base'>{post.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={handleNext} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'>
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogGallery
