import React from "react";
import { Link } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

const batches = [
  { id: 1, time: "09:00 AM - 11:00 AM", teacher: "Mr. Sharma", course: "Python", present: 30, absent: 5 },
  { id: 2, time: "11:00 AM - 01:00 PM", teacher: "Ms. Gupta", course: "Java", present: 25, absent: 10 },
  { id: 3, time: "02:00 PM - 04:00 PM", teacher: "Dr. Patel", course: "AI & ML", present: 28, absent: 7 },
  { id: 4, time: "04:00 PM - 06:00 PM", teacher: "Mr. Verma", course: "React", present: 22, absent: 8 },
];

function AttendanceHistory() {
  return (
    <div className="flex h-screen">
      <LeftSideBar />
      <div className="ml-[270px] p-6 w-full">
        <h1 className="text-3xl font-bold text-center mb-6 font-mono">📌 Attendance History</h1>

        <div className="mb-6 text-center">
          <Link to="/attend">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-mono text-lg hover:bg-blue-600">
              ✅ Take Attendance
            </button>
          </Link>
        </div>

        <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3">Batch Timing</th>
              <th className="p-3">Teacher</th>
              <th className="p-3">Course</th>
              <th className="p-3">Present</th>
              <th className="p-3">Absent</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => (
              <tr key={batch.id} className="border-b text-center">
                <td className="p-3 font-mono">{batch.time}</td>
                <td className="p-3 font-mono">{batch.teacher}</td>
                <td className="p-3 font-mono">{batch.course}</td>
                <td className="p-3 font-bold text-green-600">{batch.present}</td>
                <td className="p-3 font-bold text-red-600">{batch.absent}</td>
                <td className="p-3">
                  <Link to={`/attdetails`} state={{ batch }}>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 font-mono">
                      🔍 View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceHistory;