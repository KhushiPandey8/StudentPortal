import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Course from './components/Course'
import Profile from './components/Profile'
import Home from './Home'
function App() {
//  const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Dashboard />,
//     children: [
//       { path: '/', element:<Home /> },
//       { path: '/course', element: <Course/> },
//       { path: '/profile', element: <Profile /> },
//     ],
//   },
//   { path: '/login', element: <Login /> },
//   { path: '/signup', element: <SignUp /> },
//  ])
  return (
    <>
    {/* <Login/> */}
     {/* <Dashboard/> */}
     <Course/>

    {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App
