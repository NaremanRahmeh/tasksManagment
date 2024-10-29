import React, { useState } from 'react'
import withLayout from '../../Components/WrappingLayout/Wrapping'
import { useSelector } from 'react-redux';

function Setting() {

  const users = useSelector ((state) => state.users[0]);

  return (
    <div className='dark:text-white p-4'>
      {users.id === 1 ?
      <div className='flex flex-col gap-y-2'>
      <p className='text-[20px]'>User Name : 
        <span className='text-[16px] dark:text-gray-300'> {users.name} (admin)</span>
      </p> 
      <p className='text-[20px]'>Password : 
        <span className='text-[16px] dark:text-gray-300'> {users.password}</span>
      </p> 
      </div>
      : 
      ''
      }
    </div>
  )
}

export default withLayout(Setting)