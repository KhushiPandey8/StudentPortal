import React from 'react'
import LeftSideBar from './LeftSideBar'

function EditProfile() {
  return (
    <>
     <div className='flex justify-center items-center w-screen h-screen'>
     <LeftSideBar/>
     <div>
       <h1 className='text-3xl'> Edit Profile</h1>
     </div>
     </div>
     
    </>
   
  )
}

export default EditProfile