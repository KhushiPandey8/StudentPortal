// src/components/Course.jsx
import React from "react";
import LeftSideBar from "./LeftSideBar";
import images from "../constants/index.js"; // Ensure correct image import
import courseData from "../constants/image.js"; // Now an array

function Course() {
  return (
    <div className="flex">
      <LeftSideBar />
      <div className="ml-[270px] w-full p-6">
        <h1 className="font-mono text-[24px] text-center font-bold mt-5 border-b-2 border-black pb-2">
          Popular Courses
        </h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courseData.map((course, index) => (
            <div key={index} className="w-[400px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
              <img 
                src={images[course.image]} 
                alt={course.name} 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
