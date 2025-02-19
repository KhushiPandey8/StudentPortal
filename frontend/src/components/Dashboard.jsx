import React from 'react';
import LeftSideBar from './LeftSideBar';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { MdCoPresent } from 'react-icons/md';

const courseData = [
  { name: 'Python', students: 120 },
  { name: 'Java', students: 100 },
  { name: 'React', students: 80 },
  { name: 'AI & ML', students: 150 },
  { name: 'Data Science', students: 90 },
];

const pieData = [...courseData];
const attendanceData = [
  { name: 'Present', value: 420 },
  { name: 'Absent', value: 120 },
];
const COLORS = ['#0088FE', '#FF6347'];

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <LeftSideBar />
      <div className="ml-[270px] p-6 w-full">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-700 font-mono">📊 Student Dashboard</h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Students', value: 540, bg: 'bg-blue-500' },
            { title: 'Total Courses', value: 5, bg: 'bg-green-500' },
            { title: 'Present Students', value: 420, bg: 'bg-yellow-500' },
            { title: 'Absent Students', value: 120, bg: 'bg-red-500' },
          ].map((stat, index) => (
            <div key={index} className={`${stat.bg} p-6 rounded-lg shadow-lg text-white text-center`}> 
              <h2 className="text-2xl font-semibold font-mono">{stat.title}</h2>
              <p className="text-4xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-4 font-mono">📈 Course Enrollment</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-4 font-mono">🎯 Course Popularity</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-xl font-semibold text-center mb-4 font-mono flex items-center justify-center gap-2">
            <MdCoPresent size={30} /> Attendance Ratio
          </h2>
          <ResponsiveContainer width="50%" height={300} className="mx-auto">
            <PieChart>
              <Pie data={attendanceData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={100} label>
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;