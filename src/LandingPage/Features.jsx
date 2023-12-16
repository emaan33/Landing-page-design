import React from 'react'
import message from '../images/messages.png'
import arrow from '../images/arrow.png'
import wow from '../images/wow.png'
const Features = () => {
  return (
   <div className='md:mt-[200px] mt-[100px]'>
     <div className='md:flex'>
      <div>
        <img className='md:w-[1074px] md:h-[706px] md:mr-[-200px] ml-[-40px]'  src={message} alt="" />
      </div>


      <div className='mr-16 p-4 md:p-0'>
        <div className=''>
           <p className='font-extrabold md:text-[40px] md:w-[560px] text-left text-[30px] text-[#02073E] '>
         Meet our premium features 
        that will make you wow <span className='inline-block'><img src={wow} className='w-[40px] h-[40px]' alt="" /></span>
         </p>
        </div>
         <p className='mt-6 max-w-[500px] text-[#02073E] mb-2 text-left'>
         Build an incredible workplace
          and grow your business with Gusto’s all-in-one platform with amazing contents.
         </p>
         <div className='max-w-[550px] max-h-[190px] shadow-lg rounded-lg p-4 '>
            <p className=' flex font-bold text-[16px] text-[#02073E]'>
            Organize your project content
            </p>
            <p className='mt-6  text-[#02073E] text-left'>
            Get your website ads tests delivered at let collect sample from the victory 
            of the managments that supplies best design system which guidelines ever with multiple features.
            </p>
         </div>



        <div className='flex justify-center items-center mt-6 bg-slate-100 max-w-[550px] h-[60px] rounded-md'>
        <button className='text-[#02073E]' >
         Collaborate your multiple team support easily
         </button>
         <i className="w-[21px] h-[16px] ml-4 text-[20px] text-[#02073E] fa-solid fa-arrow-right"></i>
        </div>
        <div className='flex justify-center items-center mt-6 bg-slate-100 max-w-[550px] h-[60px] rounded-md'>
        <button className='text-[#02073E]'>
        Build your team's knowledge base system
         </button>
         <i className="w-[21px] h-[16px] ml-4 text-[20px] text-[#02073E] fa-solid fa-arrow-right"></i>
        </div>
       
      </div>
    </div>
   </div>
  )
}

export default Features
