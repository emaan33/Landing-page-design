import React, { useState } from 'react'
import hero from '../images/heroopic.png'
import pay from '../images/paypal.png'
import google from '../images/google.png'
import drop from '../images/Dropbox.png'
const Hero = () => {
  const[input,setinput]= useState("")
  return (
    <div className='md:flex bg-[#FFFCF7]  mt-0 mb-0 md:pt-[70px] md:pb-[100px] pb-[80px]'>



    <div className='md:ml-[-100px]'>
    <div className='mx-6 flex flex-col justify-center items-center'>

<div className='flex flex-col justify-center items-center'>
<p className='md:text-7xl text-4xl  mt-6 md:ml-[180px] font-bold text-[#02073E] text-center md:text-left'>Ultimate support system for leading agencies</p>
<p className='md:my-9 my-4 max-w-[490px]  text-[#02073E] md:ml-[20px] md:text-left'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best
design system guidelines ever.</p>
</div>
<div className='flex ml-[20px]'>
<div>
<input value={input} onChange={(e)=>{setinput(e.target.value)}} className='outline-none rounded-md md:max-w-[350px] w-[200px] shadow-xl p-2 text-[16px]'  placeholder='Enter Email address' type="text" />
</div>
<div className='md:mx-5 mx-2'>
          <button className=' mr-[2px] p-2 bg-[#FFC059] rounded-md  md:mt-0 text-[#FFF] hover:bg-[#01052c]'>
                Get Started
            </button>
 </div>

           
</div>

<div className='md:flex justify-center items-center mt-8  mx-6 '>
   <div> <p className='md:ml-[60px] ' >Sponsored by:</p></div>
  <div>  <img className='mx-5 p-4 md:p-0' src={pay} alt="" /></div>
   <div> <img  className='mx-9 md:mx-5 p-4 md:p-0' src={google} alt="" /></div>
   <div> <img  className='md:mx-5 mx-1 p-4  md:p-0' src={drop} alt="" /></div>
</div>
     </div>

    </div>




      <div className='mt-6'>
<img className='w-[1200px] md:ml-[-60px]' src={hero} alt="" />

      </div>
    </div>
  )
}

export default Hero
