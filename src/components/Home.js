import React from "react"
import Header from "../images/header"

function Home() {
  return (
    <section
      id='Home'
      className='flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage: `url(${Header})`,
        minHeight: "50vh",
        maxHeight: "500px"
      }}>
      <h1 className='text-white text-5xl font-bold mt-80'>Welcome to Sojourner</h1>
    </section>
  )
}

export default Home
