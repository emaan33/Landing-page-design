import React from 'react'
import boy from '../images/mic-boy.png'
import arrow from '../images/arrow.png'
const Meet = () => {
  return (
    <div className='md:mt-[90px]   md:flex justify-center items-center'>
<div className=' max-w-[540px] h-[230px] rounded-md flex justify-center text-center items-center px-10 shadow-lg'>
   <div>
   <img className='w-[100px] h-[50px] md:h-[70px]' src={boy} alt="" />
   </div>
   <div>
        <div className='flex justify-between  ml-6'>
          <p className='text-lg font-bold ml-1 text-left text-[#02073E]'>Do you need help support</p>
          <i className="flex items-center text-[20px] text-[#02073E] fa-solid fa-arrow-right"></i>
        </div>
        <div className='mt-2'>
           <p className='ml-7 text-left'>Get your website ads tests delivered at 
            let collect sample from the victory of the update managments services.</p>
        </div>
   </div>
</div>



<div className='bg-[#F6F8FB] max-w-[540px] h-[230px] rounded-md flex justify-center text-center items-center px-10 shadow-lg'>
   <div>
   <img className='w-[100px] h-[50px] md:h-[70px]' src={boy} alt="" />
   </div>
   <div>
        <div className='flex justify-between  ml-6'>
          <p className='text-lg text-left ml-1 font-bold text-[#02073E]'>Do you need help support</p>
          <i className="flex items-center text-[20px] text-[#02073E] fa-solid fa-arrow-right"></i>
        </div>
        <div className='mt-2'>
           <p className='text-left ml-7'>Get your website ads tests delivered at 
            let collect sample from the victory of the update managments services.</p>
        </div>
   </div>
</div>
<div>

</div>

    </div>
  )
}

export default Meet
