import React from "react"
import Welcome from "./Welcome"
import BlogGallery from "./BlogGallery"
import ContactForm from "./Contact"

function Home() {
  return (
    <div>
      <section
        id='home'
        className='flex items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage: `url(/images/header.jpg)`,
          minHeight: "50vh",
          maxHeight: "500px"
        }}>
        <h1 className=' font-title text-white text-8xl mt-[25%]'>Sojourner</h1>
      </section>

      <section id='welcome'>
        <Welcome />
      </section>

      <section id='blog-gallery'>
        <BlogGallery />
      </section>

      <section id='contact'>
        <ContactForm />
      </section>
    </div>
  )
}

export default Home
