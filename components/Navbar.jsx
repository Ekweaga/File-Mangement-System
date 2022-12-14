import React,{useState} from 'react'
import Image from "next/image"
import Link from "next/link"

function Navbar() {

  const [open,setOpen] = useState(false)
  return (
   <nav className='text-white flex justify-between p-4 shadow-2xl'>
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
        <li>
          <Link href="/auth/login">Sign In</Link>
        </li>
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
          className={`md:hidden text-white absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-black shadow-2xl  top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
          <li  onClick={() => setOpen(!open)}><Link href="/">Home</Link></li>
          <li className="cursor-pointer" >
                About Us
            </li>
                
                <li  onClick={() => setOpen(!open)}><Link href="melodax">Community</Link></li>
                <li  onClick={() => setOpen(!open)}>Features</li>
               
                <li></li>
          </ul>
        </div>
   </nav>
  )
}

export default Navbar