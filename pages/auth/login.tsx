import React from 'react'
import Link from "next/link"

function Login() {
  return (
   <>
   <div className='flex items-center justify-center text-white'>
    <div className='  h-[500px] w-[350px] mt-[100px] rounded-md  p-4 flex items-center justify-center flex-col bg-[#070c21cc] shadow-2xl' >
      <h1 className='font-bold text-2xl mb-[10px]'>Welcome back!</h1>
      <p>Please login to continue</p>
      <form className='flex flex-col gap-[30px] items-center justify-center mt-[15px]'>
        <div>
          <input type="email" placeholder='Email' className='bg-transparent text-white border-[1px] border-[#14f2fe] w-[300px] px-2 h-[40px]'/>

        </div>

        <div>
        <input type="password" placeholder='your password' className='bg-transparent text-white border-[1px] border-[#14f2fe] w-[300px] px-2 h-[40px]'/>
        </div>
        <div>
        <button className="bg-[#54CED5] text-white w-[280px] rounded-full p-2">Get Started</button>
        </div>
        <div>
          <p>Dont have an account ? <Link href="/auth/signup" className='text-[#14f2fe] font-bold'>SignUp</Link></p>
        </div>
        <div>
          <p><Link href="/">Go back home</Link></p>
        </div>
      </form>

    </div>
   </div>
   </>
  )
}

export default Login
