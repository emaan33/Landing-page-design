import React, { useState } from 'react'
import tick2 from '../images/tick2.png'

import cross from '../images/cross.png'

const Twobg = () => {
  const[onOff,setonOff] = useState(true)
  return (
    <div className=' bg-[#F9FAFC]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='pt-20 text-xl text-[#0F2137] font-bold mb-2'>What deal suit you perfect</p>
        <p className='text-[#0F2137]'>Meet our pricing plan</p>
        <div className='flex justify-center'>
        <button className=' text-[#02073E]'>Monthly Plan</button>
      
      <div className='p-4'>
          <input type="checkbox" id="check" onChange={()=>{setonOff(!onOff)}}  className='
               relative
               appearance-none
               inline-block
               h-[30px]
               w-[55px]
               cursor-pointer
               rounded-full
               bg-[#FFC059]
               shadow-md
               transition-all
               after:content-[""]
               after:absolute
               after:top-[3px]
               after:left-[3px]
               after:h-6
               after:w-6
               after:rounded-full
               after:bg-white
               after:shadow-sm
               after:transition-all
               
               checked:after:translate-x-6
          
          ' />
</div>  
        
      
        <button className=' text-[#02073E]'>Annual Plan</button>
        </div>
      </div>

{
  onOff===true?
  <div className='md:flex items-center justify-center mt-16'>
  <div  className='bg-white max-w-[480px] rounded-md h-[730px] shadow-2xl'>
      <div className=' p-14'>
       <div className='bg'>
       <p className='text-xl font-bold mb-2 flex text-[#0F2137]'>Startup Pack</p>
        <p  className='text-2xl font-bold text-[#FFC059] mb-7 flex'>$25.99/mo</p>
        <p className='flex text-[#02073E]'>For the startup team who work with new come data stack</p>
       </div>
        <hr className='mb-8 mt-14'/>
        <div className='flex mt-4'>
          <img  className='w-[20px] h-[20px] ' src={tick2} alt="" />
          <p className='text-[#02073E]'>Ultimate access to all course, exercises and assessments</p>
        </div>
        <div className='flex mt-4'>
          <img  className='w-[20px] h-[20px] ' src={tick2} alt="" />
           <p className='ml-2 text-[#02073E]'>Free acess for all kind of exercise corrections with downloads.</p>
        </div>
        <div className='flex mt-4'>
          <img className='w-[20px] h-[20px]' src={tick2} alt="" />
          <p className='ml-[6px] text-[#02073E]'>Total assessment corrections with free download access system</p>
        </div>
        <div className='flex mt-4'>
          <img className='w-[20px] h-[20px]' src={cross} alt="" />
          <p className='ml-[6px] opacity-30'>Unlimited download of courses on the mobile app contents</p>
        </div>
        <hr className='mb-8 mt-14'/>
        <button className='flex bg-[#FFC059] text-[#FFF] rounded-md p-2 hover:bg-orange-400'>Start Free Trial</button>
  
      </div>
      <div>
  
      </div>
  </div>
  <div  className='bg-white max-w-[510px] h-[770px] rounded-md shadow-2xl'>
      <div className=' p-14'>
       <div className='bg'>
       <p className='text-xl text-[#0F2137] font-bold mb-2 flex'>Premium Pack</p>
        <p  className='text-2xl font-bold text-[#FFC059] mb-7 flex'>$49.99/mo</p>
        <p className='flex text-[#02073E]'>For the Pro users who work with modern data stack</p>
       </div>
        <hr className='mb-8 mt-14'/>
        <div className='flex mt-4'>
          <img  className='w-[20px] h-[20px] ' src={tick2} alt="" />
          <p className='text-[#02073E]'>Ultimate access to all course, exercises and assessments</p>
        </div>
        <div className='flex mt-4'>
          <img  className='w-[20px] h-[20px] ' src={tick2} alt="" />
           <p className='ml-2 text-[#02073E]'>Free acess for all kind of exercise corrections with downloads.</p>
        </div>
        <div className='flex mt-4'>
          <img className='w-[20px] h-[20px]' src={tick2} alt="" />
          <p className='ml-[6px] text-[#02073E]'>Total assessment corrections with free download access system</p>
        </div>
        <div className='flex mt-4'>
          <img className='w-[20px] h-[20px]' src={tick2} alt="" />
          <p className='ml-[6px] text-[#02073E]'>Unlimited download of courses on the mobile app contents</p>
        </div>
        <hr className='mb-8 mt-14'/>
        <button className='flex bg-[#FFC059] text-[#FFF] rounded-md p-2  hover:bg-orange-400'>Start Free Trial</button>
  
      </div>
      <div>
  
      </div>
  </div>
  </div>
   :<div className='md:flex items-center  justify-center mt-16'>
  <div  className='bg-white w-[480px] rounded-md h-[730px] shadow-2xl'>
      <div className=' p-14'>
       <div className='bg'>
       <p className='text-xl font-bold mb-2 flex text-[#0F2137]'>Startup Pack</p>
        <p  className='text-2xl font-bold text-[#FFC059] mb-7 flex'>$100/year</p>
        <p className='flex text-[#02073E]'>For the startup team who work with new come data stack</p>
       </div>
        <hr className='mb-8 mt-14'/>
        <div className='flex mt-4'>
          <img  className='w-[20px] h-[20px] ' src={tick2} alt="" />
          <p className='text-[#02073E]'>Ultimate access to all course, exercises and assessments</p>
        </div>
        <div className='flex mt-4'>
          <img  className='w-[20px] h-[20px] ' src={tick2} alt="" />
           <p className='ml-2 text-[#02073E]'>Free acess for all kind of exercise corrections with downloads.</p>
        </div>
        <div className='flex mt-4'>
          <img className='w-[20px] h-[20px]' src={tick2} alt="" />
          <p className='ml-[6px] text-[#02073E]'>Total assessment corrections with free download access system</p>
        </div>
        <div className='flex mt-4'>
          <img className='w-[20px] h-[20px]' src={cross} alt="" />
          <p className='ml-[6px] opacity-30'>Unlimited download of courses on the mobile app contents</p>
        </div>
        <hr className='mb-8 mt-14'/>
        <button className='flex bg-[#FFC059] text-[#FFF] rounded-md p-2'>Start Free Trial</button>
  
      </div>
      <div>
  
      </div>
  </div>
  <div  className='bg-white w-[510px] h-[770px] rounded-md shadow-2xl'>
      <div className=' p-14'>
       <div className='bg'>
       <p className='text-xl text-[#0F2137] font-bold mb-2 flex'>Premium Pack</p>
        <p  className='text-2xl font-bold text-[#FFC059] mb-7 flex'>$100/year</p>
        <p className='flex text-[#02073E]'>For the Pro users who work with modern data stack</p>
       </div>
        <hr className='mb-8 mt-14'/>
        <div className='flex mt-4'>
          <img  className='w-[20px] h-[20px] ' src={tick2} alt="" />
          <p className='text-[#02073E]'>Ultimate access to all course, exercises and assessments</p>
        </div>
        <div className='flex mt-4'>
          <img  className='w-[20px] h-[20px] ' src={tick2} alt="" />
           <p className='ml-2 text-[#02073E]'>Free acess for all kind of exercise corrections with downloads.</p>
        </div>
        <div className='flex mt-4'>
          <img className='w-[20px] h-[20px]' src={tick2} alt="" />
          <p className='ml-[6px] text-[#02073E]'>Total assessment corrections with free download access system</p>
        </div>
        <div className='flex mt-4'>
          <img className='w-[20px] h-[20px]' src={tick2} alt="" />
          <p className='ml-[6px] text-[#02073E]'>Unlimited download of courses on the mobile app contents</p>
        </div>
        <hr className='mb-8 mt-14'/>
        <button className='flex bg-[#FFC059] text-[#FFF] rounded-md p-2'>Start Free Trial</button>
  
      </div>
      <div>
  
      </div>
  </div>
  </div>
  
  
}

    </div>
  )
}

export default Twobg
