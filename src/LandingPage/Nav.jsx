import React, { useState } from 'react'
import logo from '../images/logo.png'
import Small from './Small'
const Nav = () => {
    const[show,setshow] = useState(true)
  return (
  <div>
      <div className= 'flex  justify-between bg-[#FFFCF7] text-center md:px-12' >
        <div className='flex py-4 md:py-10 text-lg hover:scale-110 cursor-pointer'>
            <img className='p-2 ' src={logo} alt="" />
            <div className=' flex text-center items-center '>
                <p className='text-[#0F2137] font-bold text-[18px]' >
                StartupLand
                </p>
            </div>
        </div>
      
        <div onClick={()=>{setshow(!show)}} class="flex items-center px-4 text-2xl md:hidden font-bold text-[25px]" >
            <a href="#">&#8801;</a> 
        </div>

        <div className='md:flex hidden items-center w-[502px] '>
            <a className='p-10 hover:text-orange-700 hover:border-b-2 hover:border-orange-400' href="">Home</a>
            <a className='p-10 hover:text-orange-700 hover:border-b-2 hover:border-orange-400' href="">Adversite</a>
            <a className='p-10 hover:text-orange-700 hover:border-b-2 hover:border-orange-400' href="">Supports</a>
            <a className='p-10 hover:text-orange-700 hover:border-b-2 hover:border-orange-400' href="">About</a>
        </div>



        <div className='md:flex mt-[10px]  hidden'>
           <div>
           <div className=' flex p-4 mt-8'>
                <div className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
  <path d="M18.1582 20.2717V12.0984C18.1582 10.6229 16.9545 9.4192 15.479 9.4192H14.8046V5.64871C14.8046 2.53396 12.2706 0 9.15586 0C6.04111 0 3.51183 2.53864 3.51183 5.64871V6.29977C3.51183 6.74473 3.87249 7.1007 4.31277 7.1007C4.75305 7.1007 5.11839 6.74005 5.11839 6.29977V5.64871C5.11839 3.4192 6.93104 1.60656 9.16055 1.60656C11.3901 1.60656 13.2027 3.4192 13.2027 5.64871V9.4192H2.83736C1.36195 9.4192 0.158203 10.6183 0.158203 12.0984V20.2717C0.158203 21.7471 1.36195 22.9508 2.83736 22.9508H15.4837C16.9591 22.9461 18.1582 21.7471 18.1582 20.2717ZM1.76944 20.2717V12.0984C1.76944 11.5082 2.25188 11.0258 2.84204 11.0258H15.4837C16.0739 11.0258 16.5563 11.5082 16.5563 12.0984V20.2717C16.5563 20.8618 16.0739 21.3443 15.4837 21.3443H2.83736C2.2472 21.3396 1.76944 20.8618 1.76944 20.2717Z" fill="black"/>
  <path d="M9.16048 14.3887C8.71551 14.3887 8.35486 14.7493 8.35486 15.1896V17.2645C8.35486 17.7095 8.71551 18.0655 9.16048 18.0655C9.60544 18.0655 9.96142 17.7048 9.96142 17.2645V15.1896C9.96142 14.7493 9.60544 14.3887 9.16048 14.3887Z" fill="black"/>
</svg></div>
                <button className='cursor-pointer hover:text-orange-700 hover:text-[17px] ' >
                Login
            </button>
            </div >
           </div>
           <div className=' ml-7'>
           <button className=' mt-10 rounded-md text-[#E5A740] bg-[#FFF0D7] py-2 px-4 hover:bg-[#FFC059] hover:text-white'>
                Get Started
            </button>
           </div>
        </div>
        {
    show==true? "":<Small />
}

    </div>
    
  </div>
   
  )
}

export default Nav
