import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Course from './components/Course';
import Profile from './components/Profile';
import Home from './Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FeeHistory from './components/FeeHistory';
import AddStudents from './components/AddStudents';
import AttendanceHistory from './components/AttendanceHistory';
import EditProfile from './components/EditProfile';
import AllStudentsProfile from './components/AllStudentsProfile';
import ViewAttendanceDetails from './components/ViewAttendanceDetails';
import TakeAttendance from './components/TakeAttendance';

function App() {
  const browserRouter = createBrowserRouter([
{path:'/',element:<Dashboard/>},
{path:'/courses',element:<Course/>},
{ path: '/login', element: <Login /> },
{ path: '/signup', element: <SignUp /> },
{path:'/profile', element:<Profile />},
{path:'/attendance',element:<AttendanceHistory/>},
  {
    path:"/fees",
    element:<FeeHistory/>
  },
{path:'/attend',element:<TakeAttendance/>},
  {path:'attdetails',element:<ViewAttendanceDetails/>},
  {path:'all',element:<AllStudentsProfile/>},
  {path:'/edit',element:<EditProfile/>},
  {path:'/add',element:<AddStudents/>},
  
]);
  return (
    <div>
        <RouterProvider router={browserRouter}/>
    </div>
  );
}

export default App;
