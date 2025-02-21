import React from 'react'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl text-black font-bold text-center mb-6 font-mono">Sign up</h1>
        <form >
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-mono">Full Name</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-mono">Username</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-mono">Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <p className="text-center my-2 text-black font-mono ">
            Already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-400 ">login</Link>
          </p>
          <button className="btn btn-primary w-full mt-4 text-lg font-mono" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
