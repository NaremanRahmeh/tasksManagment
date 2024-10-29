import React from 'react'

function Importantask({task}) {
  return (
   <>
     <tr className='text-gray-600 dark:text-white border-t border-[#9696963b]'>
     <td className='px-6 py-4 '>{task.id}</td>
     <td className='px-6 py-4'>{task.taskName}</td>
     <td className='px-6 py-4'>{task.des}</td>
     <td className='px-6 py-4'>{task.endtDate}</td>
     <td className='px-6 py-4'>{task.type}</td>
     <td className='px-6 py-4'>
     <div className='flex items-center px-3'>
        {task.user && task.user.map((data => (
         <p key={data.id} className='odd:bg-gray-300 odd:text-gray-700 even:bg-[#07a0c3] even:text-white shadow-[0_0_2px_0px_rgba(255,255,255,0.3)] shadow-white ml-[-6px] w-[35px] h-[35px] text-sm rounded-full flex justify-center items-center my-3'>
         {data.name}
           </p>
         )))}
        </div>
      </td>
    </tr>
   </>
  )
}

export default Importantask