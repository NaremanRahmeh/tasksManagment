import React, { useEffect, useRef, useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Profile() {

  const[open , setOpen] = useState(false);
  const dropdown = useRef();

  useEffect(()=> {

    let handler =(e) => {
      if(!dropdown.current?.contains(e.target)){
        
        setOpen(false);
        console.log(dropdown.current)
      }
    };
    document.addEventListener('mousedown' ,handler);
    return()=>{
      document.removeEventListener('mousedown', handler);
    }
  })

  return (
   <>
    <div className='flex justify-end relative py-3' ref={dropdown}>
      <FaCircleUser
      className='text-gray-300'
       size={32} 
       onClick={()=> setOpen((prev) => !prev)}/>
      {
        open &&
        <div className='bg-white shadow-md rounded-md absolute top-11 z-20 transition-all duration-300'>
        <ul className='flex flex-col gap-2 '>
          <Link to={'/'}>
          <li className='flex items-center gap-x-2 text-[#0a0908] hover:bg-gray-100 transition-all duration-300 py-1 px-4 cursor-pointer'>
            <LuLogOut size={18} className='text-gray-400'/>
            LogOut
            </li>
            </Link>
        </ul>
          </div>
      }
    </div>
   </>
  )
}

export default Profile