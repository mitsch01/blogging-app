import React from "react"
import ProfilePicture from "./ProfilePicture" // Ensure the path is correct

function Welcome() {
  return (
    <section id='Welcome' className='py-20 bg-gray-100'>
      <div className='flex container mx-auto max-w-4xl'>
        <div>
          <h2 className='text-3xl font-bold mb-4'>Welcome to my Travel Blog</h2>
          <p className='text-lg mb-8'>Embark on a journey with me as I explore the world, one adventure at a time. From the tranquil beauty of camping under the stars to the vibrant energy of meeting new people across the globe, my blog is a tapestry of experiences that capture the essence of wanderlust.</p>
          <p className='text-lg mb-8'>Here, I share my thoughts, stories, and ideas, offering a glimpse into my travels and the incredible places I've discovered. Whether it's a serene forest hike, an exciting city exploration, or simply learning something new every day, join me in celebrating the joys of discovering the unknown.</p>
        </div>

        <div className='ml-20 mt-8'>
          <ProfilePicture
            src='/images/profile-pic.jpg'
            alt='mitsch_01'
            size='w-64 h-64'
          />
        </div>
      </div>
    </section>
  )
}

export default Welcome
