import React from 'react'
import msgs from '../images/msgs.png'
import tick from '../images/tick.png'
import msgs2 from '../images/msgs2.png'
import small from '../images/small.png'
import smile from '../images/smile.png'
const F2 = () => {
  return (
    <div className='md:flex justify-between mt-[100px]'>
      <div className='md:ml-32 ml-4'>
        
       
       <p className='text-[#02073E] md:text-[40px] text-[30px] text-left max-w-[560px] font-bold'>
         Built in one app to make instant
          reply with in lowest minutes <span className='inline-flex'>  <img src={smile} alt="" /></span>
         </p>
      
         <p className='text-[#02073E] mt-10 text-left max-w-[470px]'>Get your tests delivered at let home 
            collect sample from the victory of the
            managments that supplies best design system 
            guidelines ever.</p>
            <div className='flex mt-10 '>
                <div className='flex flex-col justify-start items-start'>
                     <div className='flex justify-center items-center'>
                    <div className='bg-green-500 rounded-full py-[3px] px-[8px] text-[13px] text-white '>
                    <i class="fa-solid fa-check"></i>
                    </div>                 
                       <p className='p-2 text-[#02073E]'>Medical and Vision</p>                  
                     </div>
                     <div className='flex justify-center items-center'>
                     <div className='bg-green-500 rounded-full py-[3px] px-[8px] text-[13px] text-white '>
                    <i class="fa-solid fa-check"></i>
                    </div>
                        <p className='p-2 text-[#02073E]'>Life Insurance</p>
                     </div>
                     <div className='flex justify-center items-center'>
                     <div className='bg-green-500 rounded-full py-[3px] px-[8px] text-[13px] text-white '>
                    <i class="fa-solid fa-check"></i>
                    </div>
                        <p className='p-2 text-[#02073E]'>400(k) savings</p>
                     </div>
                </div>


                <div className='flex flex-col justify-start items-start ml-[20px]'>
                    <div className='flex justify-center items-center'>
                    <div className='bg-green-500 rounded-full py-[3px] px-[8px] text-[13px] text-white '>
                    <i class="fa-solid fa-check"></i>
                    </div>
                        <p className='p-2 text-[#02073E]'>HSAs and FSAs</p>
                     </div>
                     <div className='flex justify-center items-center'>
                     <div className='bg-green-500 rounded-full py-[3px] px-[8px] text-[13px] text-white '>
                    <i class="fa-solid fa-check"></i>
                    </div>
                        <p className='p-2 text-[#02073E]'>Commuter benefits</p>
                     </div>
                     <div className='flex justify-center items-center'>
                     <div className='bg-green-500 rounded-full py-[3px] px-[8px] text-[13px] text-white '>
                    <i class="fa-solid fa-check"></i>
                    </div>
                        <p className='p-2 text-[#02073E]'>529 college savings</p>
                     </div>
                </div>


            </div>
<div className='pt-10 ml-[-10px] w-[130px] rounded-md flex justify-between p-2 items-center'>
<button className='text-blue-500'>Explore more</button>
<img className='w-[7px] h-[10px]' src={small} alt="" />
</div>
      </div>



      <div className='flexflex-col items-center md:h-[700px]  mt-[50px] md:mt-0 h-[357px] md:mr-20'>
      <img className='mr-24 -z-10 opacity-60 ' src={msgs} alt="" />
      <img className= 'relative z-10 md:right-[-100px] md:top-[-820px] top-[-650px] ' src={msgs2} alt="" />
       
      </div>
    </div>
  )
}

export default F2
