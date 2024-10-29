import React, { useEffect, useRef, useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteTask } from './TaskReducer';

function DropdownTask({task}) {
    const[openMenu , setOpenMenu] = useState(false);
    const dropdown = useRef();
    const dispatch = useDispatch();

    function handleChange(){
      setOpenMenu((prev) => !prev)
    }

    useEffect(()=> {

      let handler =(e) => {
        if(!dropdown.current?.contains(e.target)){
          
          setOpenMenu(false);
          console.log(dropdown.current)
        }
      };
      document.addEventListener('mousedown' ,handler);
      return()=>{
        document.removeEventListener('mousedown', handler);
      }
    })

    function handleDelete(id){
        dispatch(deleteTask({
          id: id
        }))
    }

  return (
    <div className='flex justify-end relative py-3' ref={dropdown}>
      <AiOutlineEllipsis
       size={18} 
       onClick={handleChange}/>
      {
        openMenu &&
        <div
         className='bg-white shadow-[0_0_4px_0px_rgba(0,0,0,0.2)] text-gray-700 dark:text-white dark:bg-[#0a0908] dark:shadow-[0_0_4px_0px_rgba(255,255,255,0.2)] rounded-md absolute top-7 z-20 transition-all duration-300'>
        <ul className='flex flex-col gap-2 py-4'>
          {/* <Link to={`/edittask/${task.taskName}`}> */}
          <li
          className='flex items-center gap-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 py-1 px-4 cursor-pointer'>
            <BiEdit size={18} className='text-green-600'/>
            Edit
            </li>
            {/* </Link> */}
          <li 
          onClick={() => handleDelete(task.id)}
          className='flex items-center gap-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-4 cursor-pointer'>
            <MdDeleteForever size={18} className='text-red-600'/>
            Remove
            </li>
        </ul>
          </div>
      }
    </div>
  )
}

export default DropdownTask