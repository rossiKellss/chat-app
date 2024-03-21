import React from 'react'

import { MdPassword } from "react-icons/md";
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='body flex items-center justify-center min-w-[540px]'>
            <div className='h-fit w-[40%] bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 px-8 py-6 flex flex-col gap-3'>
                <h1 className='text-emerald-600 text-3xl font-bold text-center'>Chatify</h1>

                <div className='space-y-3 mt-3' >
                    <strong className='text-xl text-gray-900 uppercase '>Login</strong>
                    <form className='space-y-4 flex flex-col'>
                        <label className="input input-bordered flex items-center gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow " placeholder="Email" />
                        </label>

                        


                        <label className="input input-bordered flex items-center gap-2 ">
                        <MdPassword />
                        <input type="password" className="grow " placeholder="Password" />
                        </label>
                        <Link href="" className=' ml-2 hover:underline text-black cursor-pointer ' to='/signup'>Don't have an account ?</Link>

                        <button className='btn btn-md bg-emerald-600 border-none text-white mt-4 self-end'>Sign Up</button>

                        


                    </form>
                </div>
            </div>


        </div>
  )
}

export default Login