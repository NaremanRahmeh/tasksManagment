import React, { useContext, useState } from 'react'
import { Menu } from '../Context/MenuContext';
import { IoMenuSharp, IoMoon, IoSunny } from "react-icons/io5";
import logo from '../images/logo.png'
import logo2 from '../images/logo2.png'
import Profile from '../Pages/Profile';

function TopBar() {

  const menu = useContext(Menu);
  const setisopen = menu.setIsOpen;

  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }

  return (
    <div className={`w-[100%] h-[70px] bg-white text-black shadow-[0_0_4px_0px_rgba(0,0,0,0.3)]
       dark:bg-[#0a0908] dark:text-white dark:shadow-[0_0_4px_0px_rgba(255,255,255,0.3)]
        pl-2 flex items-center justify-between p-5`}>
    <div className='md:w-[240px] flex justify-between items-center'>
       <div >
       {
          
          dark && <img src={logo} alt='logo' className='w-[130px]' />
      }
      {
          !dark && <img src={logo2} alt='logo' className='w-[130px] pt-3' />
      }
       </div>
       <div>
       <IoMenuSharp onClick={()=> setisopen((event) => !event)}
        className={`cursor-pointer`}
         size={25} />
       </div>
    </div>
    <div className='flex justify-center items-center gap-x-4'>
    <button onClick={()=> darkModeHandler()}>
      {
          dark &&  <div className='shadow-[0_0_4px_0px_rgba(255,255,255,0.7)] rounded-full p-[5px]'><IoSunny size={20} /></div> 
      }
      {
          !dark && <div className='shadow-[0_0_4px_0px_rgba(0,0,0,0.7)] rounded-full p-[5px]'><IoMoon className='text-gray-600' size={20}/></div>
      }
 </button>

      <Profile/>
    </div>
   </div>
  )
}

export default TopBar