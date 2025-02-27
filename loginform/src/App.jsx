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
        <div className=''>
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
      </div>
    </div>
  )
}

export default App



{/* <div className='px-8 py-6 space-y-6'>
          <div className='w-full relative'>
            <EnvelopeIcon className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
            <input 
              type="email"
              placeholder="Email"
              className='w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border dark:border-slate-600 border-blue-200 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors duration-300'
            />
          </div>
          <div className='w-full relative'>
            <LockClosedIcon className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
            <input 
              type="password"
              placeholder="Password"
              className='w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border dark:border-slate-600 border-blue-200 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors duration-300'
            />
          </div>
        </div> */}
