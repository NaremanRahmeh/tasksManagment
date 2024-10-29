import React, { useEffect } from 'react'
import { FaRegCalendarPlus } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import DropdownTask from './DropdownTask';
  

function AllTasks({task}) {
     
 
  return (
   <>
          <div className="bg-transparent shadow-[0_0_4px_0px_rgba(0,0,0,0.3)] dark:shadow-[0_0_4px_0px_rgba(255,255,255,0.3)] text-gray-800 dark:text-white p-4 py-3" id={task.id}>
           <DropdownTask task={task}/>
            <div className="flex flex-col gap-y-4 border-b-[1px] border-gray-700 pb-5">
            <p className="bg-[#a8afbd] rounded-full text-white w-max px-4 py-[3px]">{task.type}</p>
            <h1 className="text-[24px] text-gray-500 dark:text-white">{task.taskName}</h1>
            <p
             className={`font-semibold dark:font-normal ${task.stat === 'Complited' ? 'text-green-600' : ' text-red-600'}`}>
              {task.stat}</p>
            <p className="text-[13px] text-gray-500 dark:text-gray-300">{task.des}</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4 gap-x-4">
            <div className="flex items-center gap-x-1 py-2">
             <span className="w-[20px]"><FaRegCalendarPlus size={18} className='text-[#07a0c3]'/></span> 
              <p>Added :<span className="text-sm">{task.startDate}</span></p>
            </div>

            <div className="flex items-center gap-x-1 py-2">
             <span><FaCalendarDays  size={18} className='text-[#07a0c3]' /></span> 
              <p>Deadline :<span className="text-sm ">{task.endtDate}</span></p>
            </div>

            </div>
            </div>

            <div className='flex items-center px-3'>
             {task.user.map((data => (
              <p key={data.id} className='odd:bg-[#8e94a1] text-white even:bg-[#07a0c3] shadow-[0_0_2px_0px_rgba(255,255,255,0.3)] shadow-white ml-[-6px] w-[35px] h-[35px] text-sm rounded-full flex justify-center items-center my-3'>
              {data.name}
                </p>
             )))}
            </div>

          </div>

   </>
  )
}

export default AllTasks


