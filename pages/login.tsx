import React from 'react'
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'

function Login() {
  const { data: session } = useSession()
  return (
   <>
    <Head>
    <title>Login</title>
    <link rel="icon" href="/images/logo.svg" />
  </Head>
   <div className='flex items-center justify-center text-white'>
    <div className=' w-[350px] mt-[50px] rounded-md  p-4 flex items-center justify-center flex-col bg-[#070c21cc] shadow-2xl' >
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
        <button className="bg-[#54CED5] text-white w-[280px] rounded-full p-2">Login</button>
        </div>
        <div className='cursor-pointer w-[280px] border-[#14f2fe] border-[1px] p-2 flex items-center justify-center'>
          <p>SignIn with goggle</p>
        </div> Or
        <div className="flex gap-[20px] items-center justify-center"><Image src="/images/Group 4.png" width={30} height={30} alt="icon"/>
        <Image src="/images/Group 7.png" width={30} height={30} alt="icon"/>
        <Image src="/images/Group 6.png" width={30} height={30} alt="icon"/></div>
        <div>
          <p>Dont have an account ? <Link href="/signup" className='text-[#14f2fe] font-bold'>SignUp</Link></p>
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
