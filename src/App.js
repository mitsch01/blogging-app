import React, { useState } from "react"
import "./App.css"
import BlogGallery from "./components/BlogGallery"
import NavBar from "./components/NavBar"
import Home from "./components/Home"


function App() {
  return (
    <div className='App'>
      <NavBar />

      <Home /> 

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
      <BlogGallery />

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

// function BlogGallery() {
//   return (
//     <div className='blog-gallery'>
//       {Array.from({ length: 6 }).map((_, index) => (
//         <img key={index} src={images(`./blog${index + 1}.jpg`)} alt={`Blog ${index + 1}`} />
//       ))}
//     </div>
//   )
// }

export default App
