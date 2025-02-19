import React, { useState } from 'react';
import { IoIosHome } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { IoMdPerson, IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCoPresent } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function LeftSideBar() {
  const [showStudentDropdown, setShowStudentDropdown] = useState(false);

  return (
    <div className='fixed top-0 left-0 px-4 border-r-2 border-gray-300 rounded-lg w-[270px] h-screen bg-white flex flex-col items-center py-6 shadow-md'>
      
      {/* Logo Section */}
      <div className='mb-8 text-2xl font-bold font-mono'>Logo</div>

      {/* Menu Items */}
      <nav className='w-full flex flex-col gap-4 px-4'>

        <Link to="/" className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-200 rounded-lg cursor-pointer">
          <IoIosHome size="26px" />
          <span className='font-semibold text-md font-mono'>Home</span>
        </Link>

        <Link to="/courses" className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-200 rounded-lg cursor-pointer">
          <IoBookSharp size="24px" />
          <span className='font-semibold text-md font-mono'>Courses</span>
        </Link>

        {/* Student Details Dropdown */}
        <div 
          className="flex flex-col w-full cursor-pointer"
          onClick={() => setShowStudentDropdown(!showStudentDropdown)}
        >
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg">
            <IoMdPerson size="24px" />
            <span className='font-semibold text-md font-mono'>Student Details</span>
            {showStudentDropdown ? <FaChevronUp size="14px" /> : <FaChevronDown size="14px" />}
          </div>

          {showStudentDropdown && (
            <div className="ml-8 mt-1 flex flex-col gap-2">
              <Link to="/add" className="text-md font-mono text-gray-700 hover:text-black">➤ Add Student</Link>
              <Link to="/all" className="text-md font-mono text-gray-700 hover:text-black">➤ View Details</Link>
            </div>
          )}
        </div>

        <Link to="/attendance" className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-200 rounded-lg cursor-pointer">
          <MdOutlineCoPresent size="26px" />
          <span className='font-semibold text-md font-mono'>Attendance</span>
        </Link>

        <Link to="/invoice" className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-200 rounded-lg cursor-pointer">
          <FaFileInvoiceDollar size="24px" />
          <span className='font-semibold text-md font-mono'>Invoice</span>
        </Link>

        <Link to="/notice" className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-200 rounded-lg cursor-pointer">
          <MdOutlineSpeakerNotes size="24px" />
          <span className='font-semibold text-md font-mono'>Notice</span>
        </Link>

        <Link to="/search" className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-200 rounded-lg cursor-pointer">
          <FaSearch size="24px" />
          <span className='font-semibold text-md font-mono'>Search</span>
        </Link>

        <Link to="/logout" className="flex items-center gap-3 px-4 py-2 w-full hover:bg-red-200 rounded-lg cursor-pointer text-red-600 mt-auto">
          <IoMdLogOut size="24px" />
          <span className='font-semibold text-md font-mono'>Logout</span>
        </Link>

      </nav>
      
    </div>
  );
}

export default LeftSideBar;
