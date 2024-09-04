import React from "react"

function Home() {
  return (
    <section
      id='Home'
      className='flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage: `url(/images/header.jpg)`,
        minHeight: "50vh",
        maxHeight: "500px"
      }}>
      <h1 className=' font-title text-white text-8xl mt-[25%]'>Sojourner</h1>
    </section>
  )
}

export default Home
