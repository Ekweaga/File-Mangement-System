import React,{useState,useEffect} from 'react'
import Image from "next/image"
import Link from "next/link"
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import NextAuth from 'next-auth/next'


function Signup() {

  const { data: session } = useSession()
  const [email,setEmail] = useState<string>("")
  const [name,setName] = useState<string>("")
  const [password,setPassword] = useState<string | number>("")
  const [error, setError] = useState<string>("")

  const submit = (e:any)=>{
    e.preventDefault();
    if(!name || !email || !password){
      setError("Check For Empty Fields")
      return;
    }
    
  
  }
 const handlegoogleSignup =async ()=>{
    signIn('google',{callbackUrl:'http://localhost:3000'})
 }
  return (
  <>

  <Head>
    <title>Sign Up</title>
    <link rel="icon" href="/images/logo.svg" />
  </Head>
   <div className='flex items-center justify-center text-white'>
 
    <div className='   w-[350px] mt-[50px] rounded-md  p-4 flex items-center justify-center flex-col bg-[#070c21cc] shadow-3xl' >
    <Image src="/images/logo.svg" width={100} height={50} alt="icon"/>
      <p className='mt-[15px]'>Create an account here</p>
      <div className='text-red-800 '>{error}</div>
      <form className='flex flex-col gap-[30px] items-center justify-center mt-[15px]' onSubmit={submit}>
       
        <div>
        <input type="email" placeholder='Email' className='bg-transparent text-white border-[1px] border-[#14f2fe] w-[300px] px-2 h-[40px]' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div>
        <input type="password" placeholder='your password' className='bg-transparent text-white border-[1px] border-[#14f2fe] w-[300px] px-2 h-[40px]' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
        <button className="bg-[#54CED5] text-white w-[280px] rounded-full p-2">Submit</button>
        </div>
        <div className='cursor-pointer w-[280px] border-[#14f2fe] border-[1px] p-2 flex items-center justify-center' onClick={handlegoogleSignup}>
          <p>SignIn with google</p>
        </div> Or
        <div className="flex gap-[20px] items-center justify-center"><Image src="/images/Group 4.png" width={30} height={30} alt="icon"/>
        <Image src="/images/Group 7.png" width={30} height={30} alt="icon"/>
        <Image src="/images/Group 6.png" width={30} height={30} alt="icon"/></div>
        <div>
          <p>Already have an account ? <Link href="/login"  className='text-[#14f2fe] font-bold'>Login</Link></p>
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

export default Signup 