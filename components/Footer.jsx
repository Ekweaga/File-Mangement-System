import React from 'react'
import Image from "next/image"

function Footer() {
  return (
  <>
  <footer className="md:h-[400px] bg-[#081421] text-white flex flex-col gap-[40px] px-4 ">

    <div className='bg-[#182031] md:w-[850px] md:h-[250px] shadow-2xl items-center justify-center  -mt-[80px] md:ml-[200px]'>
    <div className='  flex flex-col p-4 gap-[50px] '>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-2xl text-center mb-[20px]'>Get early access today</h1>
        <p className='text-center md:w-[600px] text-sm'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team will be here to help you.</p>
      </div>

      <div className='flex items-center justify-center gap-[20px] flex-col md:flex-row py-4'>
        <input type="email" placeholder="joseph@gmail.com" className='md:w-[400px] w-[300px] bg-white rounded-full p-2 focus:outline-none text-black'/> <button  className="bg-[#54CED5] text-white md:w-[200px] w-[300px] rounded-full p-2">Get Started For Free</button>
      </div>


    </div>
    </div>

   


    <div>
      <div className='mb-[20px]'>
      <Image src="/images/logo.svg" width={100} height={50} alt="icon"/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-[40px]'>
        <div className='flex gap-[10px]'>
        <div><Image src="/images/icon-location.svg" width={10} height={50} alt="icon"/></div><p>Fylo stores all your important files in one location. Access them whenever you need,share and collaborate with friends and families, co-workers</p>
        </div>

        <div>
          <div className='flex gap-[10px] items-center '>
          <div><Image src="/images/icon-email.svg" width={10} height={50} alt="icon"/></div><p>infofylo@gmail.com</p>

          </div>
          <div className='flex gap-[10px] items-center '>
          <div><Image src="/images/icon-phone.svg" width={10} height={50} alt="icon"/></div><p>+234 81488 37221</p>

          </div>

        </div>


        <div>
          <h3>About Us</h3>
          <ul>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
        <h3>Contact Us</h3>
          <ul>
            <li>Jobs</li>
            <li>Press</li>
            
          </ul>
        </div>

        <div>

        </div>
      </div>
    </div>

  </footer>
  </>
  )
}

export default Footer
