import React,{useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import {IoCloudUpload, IoTrash} from 'react-icons/io5'
import Image from "next/image"
function Index() {
  const { data: session,status } = useSession()


  

  if (status === "loading"){
    return (
      <>
      <div className='flex items-center justify-center mt-[300px] text-center'>Checking Authentication....</div>
      </>
    )
  }
  if(!session){
    return (
      <>
     <div>
      <div className='grid grid-cols-2'>
        <div className='h-[100vh] bg-black w-[150px]  text-white flex items-center flex-col justify-content p-2' style={{zIndex:3333}}>
        <div className='p-2'>
      <Image src="/images/logo.svg" width={100} height={50} alt="icon"/>
    </div>
          <div className='mt-[200px]'>
            <ul className='flex flex-col gap-[20px] items-center justify-center'>
              <li><Link href="/">Home</Link></li>
              <li>Created Files</li>
              <li>All Folders</li>
              <li>All Files</li>
            </ul>
          </div>

          <div className='absolute bottom-[30px]'><button className='border-[1px] border-white rounded-md p-2 w-[130px]'>Logout</button></div>
        </div>

        <div>
          <div className='bg-white  h-[50px] absolute top-0 left-0 right-0'></div>

          <div className='file mt-[100px]'>
        

            <div className='mt-[300px]'>

              <div className='md:-ml-[70px]'>
                <p>File cabinet is empty. Click to save files</p>
              </div>

<Link href="/dashboard/Uploadform"> <IoCloudUpload fontSize="100" className='cursor-pointer'/></Link>
             
            </div>

          </div>
        </div>

      </div>
     </div>
     
      
      </>
     )
  }
  else{
    return(
      <>
      <div className='flex items-center justify-center mt-[300px] text-center'>
      <p>You are not authorize to view this.<br/>
       Only logged in users can. <Link href="/login"><span className='text-[#14f2fe] font-bold'>Please Login</span></Link></p></div>
      </>
    )
  }
 
}

export default Index
