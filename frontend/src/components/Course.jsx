import React from 'react'
import LeftSideBar from './LeftSideBar'

function Course() {
  return (
    <>
   
      <div className='my-3 w-full max-w-sm mx-auto'>
      <LeftSideBar/>
      <h1 className='font-mono text-[24px] text-center font-bold mt-5  border-b-2 border-black'>Popular Courses</h1>
      <div className='mt-4'>
      <div className='w-[200px] h-[200px] bg-green-400 rounded-lg'>
       Data Science
      </div>
      <div className='w-[20%] h-[20%] bg-green-400 rounded-lg'>
       Data Science
      </div>
      <div className='w-[20%] h-[20%] bg-green-400 rounded-lg'>
       Data Science
      </div>
      <div className='w-[20%] h-[20%] bg-green-400 rounded-lg'>
       Data Science
      </div>
      <div className='w-[20%] h-[20%] bg-green-400 rounded-lg'>
       Data Science
      </div>
      </div>
      
      </div>

    </>
  )
}

export default Course