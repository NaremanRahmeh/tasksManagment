import React from 'react'
import { BiEdit, BiTrashAlt } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer';


function ComponentUser({user}) {
   
  const dispatch = useDispatch();

  function handleDelete(id){
      dispatch(deleteUser({
        id: id
      }))
  }
  return (
    <>
    <tr className='bg-white dark:bg-[#0a0908] border-t border-[#9696963b]'>
     <td className='px-6 py-4'>{user.id}</td>
     <td className='px-6 py-4'>{user.name}</td>
     <td className='px-6 py-4'>{user.password}</td>
     <td className='px-6 py-4'>{user.position}</td>
     <td className='flex justify-start gap-x-1 px-6 py-4 font-medium hover:underline'>
     <Link to={`/edit/${user.id}`}>
      <BiEdit className='text-green-500 cursor-pointer' size={25}/>
     </Link>
     <BiTrashAlt onClick={() => handleDelete(user.id)} className='text-red-500 cursor-pointer' size={25}/>
     </td>
    </tr>
    </>
  )
}

export default ComponentUser