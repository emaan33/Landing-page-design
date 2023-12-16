import React, { useState } from 'react'
import last from '../images/last.png'
const End = () => {
  const[input,setinput] = useState("")
  return (

    <div className='bg-[#353448]'>
      <div className=' flex flex-col items-center justify-center'>
      <p className=' px-10 text-white md:text-4xl text-3xl pt-16 '>Subscribe to get notified about update</p>
      <p  className='px-10 text-white p-4 opacity-50'>By subscribing with your mail, you will accept our privacy policy</p>
      </div>
     <div className='md:flex flex justify-center pt-16 pb-40'>
     <div className=''>
     <input value={input} onChange={(e)=>{setinput(e.target.value)}} className='text-white outline-none border-none bg-black opacity-40 rounded-md md:w-[350px] p-2  '  placeholder='Enter Email address' type="text" />
       </div>
       <div className='mx-5 flex items-center'>
          <button className=' md:mt-0 mr-[2px] p-2 bg-[#FFC059] rounded-md text-white hover:text-[#2B293E] hover:bg-white'>
                Subscribe Us
            </button>
         </div>
     </div>

 
    <div className= 'flex shadow-lg bg-[#2B293E] justify-between text-center px-12' >
        <div className='flex py-10 text-lg'>
            <img className='p-2' src={last} alt="" />
            <div className=' flex text-center items-center hover:bg-[#2B293E]'>
                <p className='text-[#FFF]'>
                StartupLand
                </p>
                <p className='text-[#FFF] ml-6'>Copyright by 2019 YourName, Inc</p>
            </div>
        </div>

        <div className='md:flex hidden items-center '>
            <a className='p-10 text-[#FFF]' href="#">Home</a>
            <a className='p-10 text-[#FFF]' href="#">Adversite</a>
            <a className='p-10 text-[#FFF]' href="#">Supports</a>
            <a className='p-10 text-[#FFF]' href="#">Marketing</a>
            <a className='p-10 text-[#FFF]' href="#">Faq</a>
        </div>

    </div>
  
    </div>
  )
}

export default End
