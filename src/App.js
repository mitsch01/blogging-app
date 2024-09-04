import React, { useState } from "react"
import "./App.css"
const images = require.context("./images", false, /\.(png|jpe?g|svg)$/)
const headerImage = images("./header.jpg")


function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const blogPosts = [
    { id: 1, title: "Blog Post 1", description: "Brief description of Blog Post 1", image: "post-image1.jpg" },
    { id: 2, title: "Blog Post 2", description: "Brief description of Blog Post 2", image: "post-image2.jpg" },
    { id: 3, title: "Blog Post 3", description: "Brief description of Blog Post 3", image: "post-image3.jpg" },
    { id: 4, title: "Blog Post 4", description: "Brief description of Blog Post 4", image: "post-image4.jpg" },
    { id: 5, title: "Blog Post 5", description: "Brief description of Blog Post 5", image: "post-image5.jpg" },
    { id: 6, title: "Blog Post 6", description: "Brief description of Blog Post 6", image: "post-image6.jpg" }
  ]

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? blogPosts.length - 3 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === blogPosts.length - 3 ? 0 : prevIndex + 1))
  }

  return (
    <div className='App'>
      {/* Navigation Bar */}
      <nav className='bg-gray-800 fixed w-full z-10 top-0 shadow-lg'>
        <div className='container mx-auto px-6 py-3 flex justify-between items-center'>
          <div className='text-white text-lg font-bold'>Sojourner</div>
          <div className='flex space-x-4'>
            <a href='#Home' className='text-gray-300 hover:text-white'>
              Home
            </a>
            <a href='#Welcome' className='text-gray-300 hover:text-white'>
              Welcome
            </a>
            <a href='#BlogGallery' className='text-gray-300 hover:text-white'>
              Blog Gallery
            </a>
            <a href='#Contact' className='text-gray-300 hover:text-white'>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id='Home' className='flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${headerImage})`, minHeight: "50vh", maxHeight: "500px" }}>
        <h1 className='text-white text-5xl font-bold mt-80'>Welcome to Sojourner</h1>
      </section>

      {/* Welcome Section */}
      <section id='Welcome' className='py-20 bg-gray-100'>
        <div className='container mx-auto text-center max-w-4xl'>
          <h2 className='text-3xl font-bold mb-4'>Hi There!</h2>
          <p className='text-lg mb-8'>Embark on a journey with me as I explore the world, one adventure at a time. From the tranquil beauty of camping under the stars to the vibrant energy of meeting new people across the globe, my blog is a tapestry of experiences that capture the essence of wanderlust.</p>
          <p className='text-lg mb-8'>Here, I share my thoughts, stories, and ideas, offering a glimpse into my travels and the incredible places I've discovered. Whether it's a serene forest hike, an exciting city exploration, or simply learning something new every day, join me in celebrating the joys of discovering the unknown.</p>
          <p className='text-lg'>Let’s connect, learn, and grow together through the stories and insights I share. Welcome to a space where adventure knows no bounds and every day is a new opportunity to embrace the world.</p>
        </div>
      </section>

      {/* Blog Gallery Section */}
      <section id='BlogGallery' className='py-20 bg-white'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-12'>Latest Blog Posts</h2>
          <div className='blog-gallery'></div>
          <div className='flex justify-center items-center space-x-4'>
            {/* Left Arrow */}
            <button onClick={handlePrev} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>
              &lt;
            </button>

            {/* Blog Post Cards */}
            <div className='flex space-x-4'>
              {blogPosts.slice(currentIndex, currentIndex + 3).map((post, index) => (
                <div key={post.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
                  {/* Map the image corresponding to the post */}
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

      {/* Contact Section */}
      <section id='Contact' className='py-20 bg-gray-100'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Get in Touch</h2>
          <form className='max-w-lg mx-auto'>
            <div className='mb-4'>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Your name' />
            </div>
            <div className='mb-4'>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Your email' />
            </div>
            <div className='mb-6'>
              <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' rows='5' placeholder='Your message'></textarea>
            </div>
            <div className='flex items-center justify-center'>
              <button className='bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto text-center'>&copy; 2024 Sojourner Blog. All rights reserved.</div>
      </footer>
    </div>
  )
}

function BlogGallery() {
  return (
    <div className='blog-gallery'>
      {Array.from({ length: 6 }).map((_, index) => (
        <img key={index} src={images(`./blog${index + 1}.jpg`)} alt={`Blog ${index + 1}`} />
      ))}
    </div>
  )
}

export default App
