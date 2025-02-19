// ViewAttendanceDetails Component
import { useLocation } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

function ViewAttendanceDetails() {
  const location = useLocation();
  const batch = location.state?.batch;

  if (!batch) {
    return <div className="text-center mt-10 text-red-500">No batch details available.</div>;
  }

  const students = [
    { id: 1, name: "John Doe", status: "Present", task: "Completed Module 3" },
    { id: 2, name: "Jane Smith", status: "Absent", task: "N/A" },
    { id: 3, name: "Alice Johnson", status: "Present", task: "Worked on Project" },
    { id: 4, name: "Bob Brown", status: "Present", task: "Completed Quiz" },
  ];

  return (
    <div className="flex h-screen">
      <LeftSideBar />
      <div className="ml-[270px] p-6 w-full">
        <h1 className="text-3xl font-bold text-center mb-6 font-mono">📌 Batch Attendance Details</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-center mb-4">Batch Timing: {batch.time}</h2>
          <p><strong>Teacher:</strong> {batch.teacher}</p>
          <p><strong>Course:</strong> {batch.course}</p>
          <p className="text-green-600"><strong>Present:</strong> {batch.present}</p>
          <p className="text-red-600"><strong>Absent:</strong> {batch.absent}</p>

          <h3 className="text-lg font-bold mt-6">Student Attendance</h3>
          <table className="w-full mt-4 bg-gray-100 shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-500 text-white">
                <th className="p-3">Student Name</th>
                <th className="p-3">Status</th>
                <th className="p-3">Task Completed</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b text-center">
                  <td className="p-3 font-mono">{student.name}</td>
                  <td className={`p-3 font-bold ${student.status === "Present" ? "text-green-600" : "text-red-600"}`}>
                    {student.status}
                  </td>
                  <td className="p-3">{student.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewAttendanceDetails;
