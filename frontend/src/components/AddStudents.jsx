import React, { useState } from 'react';
import LeftSideBar from './LeftSideBar';

function AddStudents() {
  const [batchTime, setBatchTime] = useState("");

  const batchTimings = [
    "09:00 AM - 11:00 AM",
    "11:00 AM - 01:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
  ];

  return (
    <div className='flex justify-center h-screen items-center'>
      <LeftSideBar />

      <div className='bg-white ml-[250px] p-10 h-auto w-[600px] rounded-lg shadow-lg'>
        <h1 className='text-3xl font-mono text-center font-bold mb-6'>
          Add New Student
        </h1>

        <form className='space-y-4'>

          {/* Student Name */}
          <div>
            <label className="block text-base font-mono text-black">Student Name</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Enter Student Name"
              required
            />
          </div>

          {/* Student Email */}
          <div>
            <label className="block text-base font-mono text-black">Student Email</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="email"
              placeholder="Enter Student Email"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-base font-mono text-black">Address</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Enter Address"
              required
            />
          </div>

          {/* Course Selection Dropdown */}
          <div>
            <label className="block text-base font-mono text-black">Select Course</label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option value="">-- Select a Course --</option>
              <option value="data-science">Data Science</option>
              <option value="machine-learning">Machine Learning</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="web-development">Web Development</option>
              <option value="cyber-security">Cyber Security</option>
            </select>
          </div>

          {/* Batch Timing Selection */}
          <div>
            <label className="block text-base font-mono text-black">Select Batch Timing</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              value={batchTime}
              onChange={(e) => setBatchTime(e.target.value)}
            >
              <option value="">-- Choose a Batch Time --</option>
              {batchTimings.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition text-lg font-mono"
            type="submit"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddStudents;
