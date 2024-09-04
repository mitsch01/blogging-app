import React from "react"

function NavBar() {
  return (
    <nav className='bg-gray-800 fixed w-full z-10 top-0 shadow-lg'>
      <div className='container mx-auto py-3 flex justify-between items-center'>
        <div className='text-white text-lg font-bold'>Sojourner</div>
        <div className='flex space-x-4'>
          <a href='#Home' className='text-white hover:underline'>
            Home
          </a>
          <a href='#Welcome' className='text-white hover:underline'>
            Welcome
          </a>
          <a href='#BlogGallery' className='text-white hover:underline'>
            Blog Gallery
          </a>
          <a href='#Contact' className='text-white hover:underline'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar