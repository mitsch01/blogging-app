import React from "react"

function NavBar() {
  return (
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
  )
}

export default NavBar