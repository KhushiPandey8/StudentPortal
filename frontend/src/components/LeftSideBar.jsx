import React from 'react';
import { IoIosHome } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { IoMdPerson, IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

function LeftSideBar() {
  return (
    <div className='fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[20%] h-screen primary flex flex-col items-center py-6 shadow-md'>
      
      {/* Logo Section */}
      <div className='mb-8 text-xl font-bold font-mono'>Logo</div>

      {/* Menu Items */}
      <nav className='w-full flex flex-col gap-3 px-4 items-center'>

        {/* <Link to="/" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer"> */}
          <IoIosHome size="26px" />
          <span className='font-semibold text-md font-mono'>Home</span>
        {/* </Link> */}

        {/* <Link to="/courses" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer"> */}
          <IoBookSharp size="24px" />
          <span className='font-semibold text-md font-mono'>Courses</span>
        {/* </Link> */}

        {/* <Link to="/profile" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer"> */}
          <IoMdPerson size="24px" />
          <span className='font-semibold text-md font-mono'>Profile</span>
        {/* </Link> */}

        {/* <Link to="/logout" className="flex items-center gap-3 px-4 py-2 hover:bg-red-200 rounded-lg cursor-pointer text-red-600 mt-auto"> */}
          <IoMdLogOut size="24px" />
          <span className='font-semibold text-md font-mono'>Logout</span>
        {/* </Link> */}

      </nav>
      
    </div>
  );
}

export default LeftSideBar;
