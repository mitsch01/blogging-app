import React from "react"

const ProfilePicture = ({ src, alt = "Profile Picture", size = "w-32" }) => {
  return (
    <div className={`rounded-full overflow-hidden ${size}`}>
      <img src={src} alt={alt} className='object-cover w-full h-full' />
    </div>
  )
}

export default ProfilePicture
