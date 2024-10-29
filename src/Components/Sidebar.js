import React, { useContext } from 'react'
import { RxDashboard } from "react-icons/rx";
import { GoTasklist } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import { AiOutlineFileSync } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Menu } from '../Context/MenuContext';
import { IoSettingsOutline } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';

function Sidebar() {

    const men = useContext(Menu)
    const isOpen = men.isopen
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const menu = [
        {
            id: 1 ,
            title : 'Dashboard',
            url : '/dashboard' ,
            icon : <RxDashboard  />
        },
        {
            id: 2,
            title : 'Tasks',
            url : '/tasks' ,
            icon : <GoTasklist />
        },
        {
            id: 3,
            title : 'Complited Tasks',
            url : '/complitedtasks' ,
            icon : <BiTask />
        },
        {
            id: 4,
            title : 'In Progrees Task',
            url : '/inprogreestasks' ,
            icon : <AiOutlineFileSync />
        },
        {
            id: 5,
            title : 'Users',
            url : '/team' ,
            icon : <FaUserGroup />
        },
        {
            id: 5,
            title : 'Setting',
            url : '/setting' ,
            icon : <IoSettingsOutline />
        },
    ]

  return (
      <>
      <div className={`bg-white text-black dark:bg-[#0a0908] dark:text-white h-[100%] shadow-[0_0_0_2px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.1)]  py-1 px-2
       ${isOpen ? ' w-[260px]' : 'w-[50px]' }
       ${isMobile ? 'w-[50px]' : 'w-[260px]'}
       `}>
      <div className='flex flex-col'>
      {menu.map((index)=>{
        return(
            <>
            <Link className='flex items-center gap-x-2 text-[16px] py-6 border-b border-[#96969650]'  to={index.url} id={index.id}> 
             <span className='text-[23px] pl-1'>{index.icon}</span>
             <p className={`${isOpen ? 'visible' : 'hidden'}
             ${isMobile ? 'hidden' : 'visible'}
             `}>{index.title}</p>
            </Link>
            </>
        ) 
      })}
      </div>
     </div>

      </>
  )
}

export default Sidebar