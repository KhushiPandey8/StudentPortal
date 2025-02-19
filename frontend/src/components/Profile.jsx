import React from 'react';
import LeftSideBar from './LeftSideBar';
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Profile() {
  return (
    <>
    <div className="flex ">
      {/* Left Sidebar */}
      <LeftSideBar />

      {/* Profile Content */}
      <div className="ml-[250px] p-8 w-full">
        <h1 className="text-3xl font-bold text-center mb-6 font-mono">👤 Student Profile</h1>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Profile Image */}
          <img src="https://via.placeholder.com/150" alt="Profile" className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4" />

          {/* Student Info */}
          <h2 className="text-2xl font-bold font-mono">Khushi Pandey</h2>
          <p className="text-gray-600 font-mono">BSc IT | LN College</p>
          <p className="text-gray-500 font-mono">📧 khushipandey.email@example.com</p>

          {/* Academic Stats */}
          <div className="grid grid-cols-2 gap-6 mt-6 w-full text-center">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold font-mono">Total Courses</h3>
              <p className="text-3xl font-bold font-mono">5</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold font-mono">Attendance</h3>
              <p className="text-3xl font-bold font-mono">78%</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <Link to='/edit'>
          <button className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 font-mono">
            ✏️ Edit Profile
          </button>
          </Link>
        </div>
      </div>
      <div className='h-[400px] width-[400px]'>
      <Link to='/add'>
      <button className='bg-blue-500 mt-4 mr-10 rounded-lg flex items-center justify-center text-white font-mono text-sm pl-4 pr-4'>
        
      <FaRegMoneyBill1 size="45px" />
        Check Fees </button>
      </Link>
      
      </div>
      
    </div>
    
  
    </>
  );
}

export default Profile;
