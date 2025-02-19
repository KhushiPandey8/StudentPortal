import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";

function TakeAttendance() {
  const [date, setDate] = useState("");
  const [teacher, setTeacher] = useState("");
  const [batchTime, setBatchTime] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", status: "Present" },
    { id: 2, name: "Jane Smith", status: "Absent" },
    { id: 3, name: "Alice Johnson", status: "Present" },
    { id: 4, name: "Bob Brown", status: "Absent" },
  ]);

  const teachers = ["Mr. Sharma", "Ms. Gupta", "Dr. Patel", "Mr. Verma"];
  const batchTimings = ["09:00 AM - 11:00 AM", "11:00 AM - 01:00 PM", "02:00 PM - 04:00 PM", "04:00 PM - 06:00 PM"];

  const handleAttendanceChange = (id, status) => {
    setStudents((prev) =>
      prev.map((student) => (student.id === id ? { ...student, status } : student))
    );
  };

  const handleSubmit = () => {
    const attendanceData = {
      date,
      teacher,
      batchTime,
      students,
    };
    console.log("Attendance Submitted:", attendanceData);
    alert("✅ Attendance submitted successfully!");
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <LeftSideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6 font-mono">📌 Take Attendance</h1>

          {/* Date Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">📅 Select Date:</label>
            <input
              type="date"
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Teacher Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">👨‍🏫 Select Teacher:</label>
            <select
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
            >
              <option value="">-- Choose a Teacher --</option>
              {teachers.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Batch Timing Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold">⏰ Select Batch Timing:</label>
            <select
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={batchTime}
              onChange={(e) => setBatchTime(e.target.value)}
            >
              <option value="">-- Choose a Batch Time --</option>
              {batchTimings.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Student Attendance List */}
          <div>
            <h2 className="text-lg font-bold mb-3">👨‍🎓 Student Attendance:</h2>
            <table className="w-full bg-gray-100 shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-500 text-white">
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b text-center">
                    <td className="p-3 font-mono">{student.name}</td>
                    <td className="p-3">
                      <select
                        className="p-2 border rounded-lg"
                        value={student.status}
                        onChange={(e) => handleAttendanceChange(student.id, e.target.value)}
                      >
                        <option value="Present">✅ Present</option>
                        <option value="Absent">❌ Absent</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-mono text-lg hover:bg-green-600"
              onClick={handleSubmit}
            >
              📌 Submit Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeAttendance;
