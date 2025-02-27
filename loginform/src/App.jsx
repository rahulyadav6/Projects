import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  },[darkMode])

  return (
    <div className='h-screen dark:bg-slate-800 dark:text-white bg-blue-100 transition-colors duration-500 flex justify-center items-center'>
      <button
        onClick={()=> setDarkMode(!darkMode)}
        className='absolute top-4 right-4 p-2 rounded-lg transition-transform hover:scale-110 duration-300'
      >
        {darkMode ?  '☀️' : '🌙'}
      </button>



      <div className='rounded-2xl shadow-2xl min-h-80 w-96 pt-5 
        dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-950
        bg-gradient-to-r from-white to-blue-100 transition-all duration-100'>
        {/* header  */}
        <div className='text-center text-xl font-bold'>
          <h2>Login</h2>
        </div>  

        {/* input group */}
        <div className='px-8 pt-6 space-y-6'>
          <div className='w-full relative'>
          <EnvelopeIcon className='w-5 absolute left-3 top-1/2 -translate-y-1/2  h-5 text-gray-400' />
          <input
            type='email'
            placeholder='Email'
            className='w-full px-12 py-3 rounded-lg bg-transparent border dark:border-slate-600 border-blue-200 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors duration-300'
          />

          </div>
          <div className='w-full relative'>
          <LockClosedIcon className='w-5 absolute left-3 top-1/2 -translate-y-1/2 h-5 text-gray-400' />
          <input
            type='password'
            placeholder='password'
            className='w-full px-12 py-3 rounded-lg bg-transparent border dark:border-slate-600 border-blue-200 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors duration-300'
          />
          </div>
        </div>

        {/* options */}
        <div className='px-8 pt-6 pb-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='remember'
              className='w-4 h-4 rounded border-gray-300 dark:border-slate-600 text-blue-500 focus:ring-blue-500'
            />
            <label htmlFor='remember' className='text-sm text-gray-600 dark:text-gray-300'>
              Remember me
            </label>
          </div>
          <div>
            <a href='#' className='text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>
              Forgot password?
            </a>
          </div>
        </div>


        {/* login button  */}
        <div className='px-8 pb-6'>
          <button className='w-full py-3 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300'>
            Login
          </button>
        </div>
        <div className='text-center text-sm text-gray-600 dark:text-gray-300'>
          Dont have an account? <a href='#' className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>
            Sign up
          </a>
        </div>

        {/* social login  */}
        <div className='px-8 py-6'>
          <div className='relative flex items-center justify-center'>
            <div className='border-t w-full dark:border-slate-600 border-gray-300'></div>
            <span className='whitespace-nowrap dark:bg-slate-800 px-3 text-sm text-gray-500 dark:text-gray-400'>
              Or connect with
            </span>
            <div className='border-t w-full dark:border-slate-600 border-gray-300'></div>
          </div>

          {/* social buttons */}
          <div className='flex justify-center gap-4 mt-6'>
            <button className='p-2 rounded-lg border dark:border-slate-600 border-gray-300 hover:scale-110 transition-transform duration-300 bg-white dark:bg-gray-200'>
              <img src='https://www.svgrepo.com/show/512120/facebook-176.svg' alt='facebook' className='w-6 h-6 dark:' />
            </button>
            <button className='p-2 rounded-lg border dark:border-slate-600 border-gray-300 hover:scale-110 transition-transform duration-300 bg-white dark:bg-gray-200'>
              <img src='https://www.svgrepo.com/show/506498/google.svg' alt='google' className='w-6 h-6' />
            </button>
            <button className='p-2 rounded-lg border dark:border-slate-600 border-gray-300 hover:scale-110 transition-transform duration-300 bg-white dark:bg-gray-200'>
              <img src='https://www.svgrepo.com/show/512317/github-142.svg' alt='github' className='w-6 h-6' />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App

