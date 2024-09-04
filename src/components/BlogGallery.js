import React, { useState } from "react"
import { Link } from "react-router-dom"
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
    <section id='BlogGallery' className='bg-white py-20'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-extrabold mb-12'>Latest Blog Posts</h2>

        <div className='flex justify-center items-center space-x-4'>
          {/* Left Arrow */}
          <button onClick={handlePrev} className='hover:bg-gray-200 text-gray-800 font-bold text-3xl py-2 px-4'>
            &lt;
          </button>

          {/* Blog Post Cards */}
          <div className='flex space-x-4'>
            {blogPosts.slice(currentIndex, currentIndex + 3).map(post => (
              <div key={post.id} className='max-w-sm overflow-hidden shadow-lg'>
                <Link to={`/blog/${post.id}`} key={post.id} className='max-w-sm overflow-hidden shadow-lg'>
                  <img src={images(`./blog${post.id}.jpg`)} alt={`Blog ${post.id}`} />
                  <div className='px-10 py-12'>
                    <h3 className='font-bold text-xl mb-2'>{post.title}</h3>
                    <p className='text-gray-700 text-base'>{post.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={handleNext} className='hover:bg-gray-200 text-gray-800 font-bold text-3xl py-2 px-4'>
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogGallery
