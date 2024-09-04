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
      <h1 className='text-white text-8xl font-bold mt-80'>Sojourner</h1>
    </section>
  )
}

export default Home
