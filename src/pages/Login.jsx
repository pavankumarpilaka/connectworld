import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Login = () => {
  const [state, setstate] = useState('Sign up')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [name, setname] = useState('')
  const { token, settoken } = useContext(AppContext)

  const onsubmithandler = async (event) => {
    event.preventDefault()
    // Handle the form submission logic here (e.g., API call)
  }

  const navigate = useNavigate()

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign up' ? "Sign Up" : "Login"} to Book Appointment</p>

        {/* Full Name field (only visible in Sign up state) */}
        {state === 'Sign up' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type='text'
              onChange={(e) => setname(e.target.value)} // Fixed to use e.target.value
              value={name}
              required
            />
          </div>
        )}

        {/* Email field */}
        <div className="w-full">
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='email' // It's a good practice to use 'email' type for emails
            onChange={(e) => setemail(e.target.value)} // Fixed to use e.target.value
            value={email}
            required
          />
        </div>

        {/* Password field */}
        <div className="w-full">
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='password' // It's better to use 'password' type for password inputs
            onChange={(e) => setpass(e.target.value)} // Fixed to use e.target.value
            value={pass}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          className='bg-primary text-white w-full py-2 rounded-md text-base' onClick={() => {navigate('/');settoken('true')}}
        >
          {state === 'Sign up' ? "Create Account" : "Login"}
        </button>

        {/* Toggle between Sign Up and Login */}
        {state === "Sign up" ? (
          <p>Already Have An Account?
            <span
              onClick={() => setstate('Login')}
              className='text-primary underline cursor-pointer'
            >
              Login
            </span>
          </p>
        ) : (
          <p>New Here? Register
            <span
              onClick={() => setstate('Sign up')}
              className='text-primary underline cursor-pointer'
            >
              Register
            </span>
          </p>
        )}
      </div>
    </form>
  )
}

export default Login
