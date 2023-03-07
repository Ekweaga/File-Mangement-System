import React,{useState} from 'react'
import Image from "next/image"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

function Navbar() {
  const { data: session } = useSession()
  const router = useRouter();
const transition = {
  transition:'all 0.5 ease-in'
}


const handlesignOut = async ()=>{
const data = await signOut({redirect:false,callbackUrl:'/auth/login'})
router.push(data.url)
} 

  const [open,setOpen] = useState(false)
  return (
   <nav className='text-white flex justify-around py-4 shadow-2xl fixed top-0 left-0 bg-[#081421] right-0' style={{zIndex:777777}}>
    <div>
      <Image src="/images/logo.svg" width={100} height={50} alt="icon"/>
    </div>
    <div>
      <ul className='text-white md:flex justify-between gap-[30px] hidden '>
        <li>
          Home
        </li>
        <li>
          Features
        </li>

        <li>About Us</li>
       {
        session ?  <li>
        <Link href="#" onClick={handlesignOut}>Sign Out</Link>
      </li>: <li>
          <Link href="/login">Sign In</Link>
        </li>
       }
      </ul>
    </div>

    <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/images/icon-close.svg" :"/images/icon-hamburger.svg"} alt="icon" width={30} height={20}></Image>
        </div>

        
        <div
          className={`md:hidden transition ease-out duration-500 text-white absolute w-screen h-screen z-10
      px-7 py-2 font-medium bg-[#081421] shadow-2xl  top-0 ${
        open ? "right-0 block" : "left-0 hidden"
      }`   } style={{transition:'all 0.5 ease'}}
        >
<div    className={`z-[99999px] text-3xl md:hidden absolute left-[30px] top-[30px] `}>
      <Image src="/images/logo.svg" width={100} height={50} alt="icon"/>
    </div>
          <div  onClick={() => setOpen(!open)}
          className={`z-[99999px] text-3xl md:hidden absolute right-[30px] top-[30px] `}>
            <Image src="/images/icon-close.svg" width={20} height={20} alt="icon"/>
          </div>
          <ul className="flex flex-col justify-center h-[300px] gap-[50px] py-2 text-lg mt-[180px]">
          <li  onClick={() => setOpen(!open)}><Link href="/">Home</Link></li>
          <li className="cursor-pointer" >
                About Us
            </li>
                
               
                <li  onClick={() => setOpen(!open)}>Features</li>
               
                <li className='flex gap-[5px]'><Link href="/login"><button className="bg-[#54CED5] text-white w-[170px] rounded-full p-2" >LOGIN</button></Link>
                <Link href="/signup"><button className="bg-[#54CED5] text-white w-[170px] rounded-full p-2" >SIGNUP</button></Link>
                </li>
          </ul>
        </div>
   </nav>
  )
}

export default Navbar