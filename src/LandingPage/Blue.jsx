import React from 'react'
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'
import five from '../images/five.png'
import six from '../images/six.png'
const Blue = () => {
  return (
   <div className='bg-[#353448]  mt-[240px] md:mt-[200px]'>
     <div className='p-20 hidden md:flex flex-col'>
     <div className='flex justify-between '>
      <div className='w-[142px] flex justify-start items-start'>
      <img  src={two} alt="" />
      </div>
     <div className='w-[142px] flex justify-start items-start '>
     <img src={three} alt="" />
     </div>
      <div className='w-[142px] flex justify-start items-start '>
      <img src={four} alt="" />
      </div>
     <div className='w-[142px] flex justify-start items-start '> 
     <img src={five} alt="" />
     </div>
    <div className='w-[142px] flex justify-start items-start '>
    <img src={six} alt="" />
    </div>
    </div>
    {/* <hr className=' bg-red-500 h-[4px] overflow-visible block relative w-[100%] before:absolute before:w-[300px] before:border-yellow-500 before:z-[1] before:top[-2px] before:h-[8px] before:left-0 ' /> */}
   <div className='mt-8'>
   <hr className='w-52 h-1 bg-[#FFC059]  border-0 rounded' />
    <hr />
   </div>
    <div className='flex  mt-[25px] justify-between'>
       <div className=' text-[#FFC059]  w-[142px] '>
       Custom Dashboard
       </div>
        <div className='text-[#FFF] text-left  w-[142px] '>
        <p>Create & adjust</p>
        </div>
        <div className='text-[#FFF] text-left w-[142px] '>
        <p>View Reports</p>
        </div>
        <div className='text-[#FFF] text-left  w-[142px] '>
        <p>Optimize website</p>
        </div>
        <div className='text-[#FFF] text-left  w-[142px] '>
<p>Custom Dashboard</p>
        </div>
    </div>
     </div>

<div className='md:hidden flex flex-col items-center pt-4 pb-[50px]'>
      <div className='p-4'>
      <div className='w-[142px] flex justify-start items-start'>
      <img  src={two} alt="" />
      </div>
      <div className=' text-[#FFC059]  w-[142px] '>
       Custom Dashboard
       </div>
      </div>
      <div className='p-4'>
<div className='w-[142px] flex justify-start items-start '>
     <img src={three} alt="" />
     </div>
     <div className='text-[#FFF] text-left  w-[142px] '>
        <p>Create & adjust</p>
        </div>
      </div>
       <div className='p-4'>
       <div className='w-[142px] flex justify-start items-start '>
      <img src={four} alt="" />
      </div>
      <div className='text-[#FFF] text-left w-[142px] '>
        <p>View Reports</p>
        </div>
       </div>
       <div className='p-4'>
       <div className='w-[142px] flex justify-start items-start '> 
     <img src={five} alt="" />
     </div>
       <div className='text-[#FFF] text-left  w-[142px] '>
        <p>Optimize website</p>
        </div>
       
       </div>
       <div className='p-4'>
       <div className='w-[142px] flex justify-start items-start '>
    <img src={six} alt="" />
    </div>
       <div className='text-[#FFF] text-left  w-[142px] '>
<p>Custom Dashboard</p>
        </div>
       </div>
</div>


<div  className='md:flex'>
    <div className='md:ml-24 ml-4 md:mb-36 mb-20'>
      <p  className='font-bold md:w-[530px] text-left text-[30px] md:text-[40px] md:mt-[100px] text-white'>
      Introduce quality feature 
that boost your website
rank & performance
      </p>
      <p className='mt-[25px] text-left opacity-80 max-w-[438px] text-white'>
      Build an incredible workplace and grow your business with 
      Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.
      </p>
      <button className='mt-[25px] flex  text-white bg-[#FFC059] px-7 py-4 font-bold rounded-md  hover:bg-orange-100 hover:text-[#353448]'>More Details</button>
    </div>
    <div >
     <img className='p-4 md:p-0 md:mt-[50px] w-[1261px] md:h-[734px] rounded-md' src={one} alt="" />
    </div>
</div>

   </div>
  )
}

export default Blue
