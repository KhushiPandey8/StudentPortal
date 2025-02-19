import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';

function AllStudentsProfile() {
  const [searchQuery, setSearchQuery] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'Khushi Pandey', phone: '9876543210', email: 'khushipandey.email@example.com', course: 'BSc IT' },
    { id: 2, name: 'John Doe', phone: '9123456789', email: 'john.doe@example.com', course: 'BTech CSE' },
    { id: 3, name: 'Jane Smith', phone: '9234567890', email: 'jane.smith@example.com', course: 'MSc Data Science' },
    { id: 1, name: 'Khushi Pandey', phone: '9876543210', email: 'khushipandey.email@example.com', course: 'BSc IT' },
    { id: 2, name: 'John Doe', phone: '9123456789', email: 'john.doe@example.com', course: 'BTech CSE' },
    { id: 3, name: 'Jane Smith', phone: '9234567890', email: 'jane.smith@example.com', course: 'MSc Data Science' }
  ]);

  // Filter students based on search query
  const filteredStudents = students.filter(student => student.phone.includes(searchQuery));

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <LeftSideBar />

      {/* Main Content */}
      <div className="ml-[250px] p-8 w-full">
        <h1 className="text-3xl font-bold text-center mb-6 font-mono">📚 All Students</h1>
        
        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input 
            type="text" 
            placeholder="Search by Phone Number..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Students List */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          {filteredStudents.length > 0 ? (
            filteredStudents.map(student => (
              <div key={student.id} className="flex justify-between items-center border-b py-3">
                <div>
                  <h2 className="text-xl font-bold font-mono">{student.name}</h2>
                  <p className="text-gray-600">📧 {student.email}</p>
                  <p className="text-gray-500">📞 {student.phone}</p>
                  <p className="text-gray-700 font-semibold">📖 Course: {student.course}</p>
                </div>
                {/* <Link to={`/profile/${student.id}`}> */}
                <Link to={`/profile`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 font-mono">
                    👀 View Profile
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 font-mono">No students found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllStudentsProfile;
