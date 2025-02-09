import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
// import { Link } from "react-router-dom";
function Login() {
  return (
    <>
       <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl text-black font-bold text-center mb-6 font-mono">
          Login
        </h1>
        <form >
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-mono">Username</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter Username"
              aria-label="Username"
              required
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
              aria-label="Password"
              required
            />
          </div>

          <p className="text-center my-2 text-black font-mono">
            Create a new account?
             <Link to="/signup" className="text-blue-600 hover:text-blue-400 ">Sign up</Link>
          </p>
          <button
            className="btn btn-primary w-full mt-4 text-lg font-mono"
            type="submit"
            
          >  Login
            {/* {loading ? "Logging in..." : "Login"} Show loading text */}
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
