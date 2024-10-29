import React from 'react'
import withLayout from '../../Components/WrappingLayout/Wrapping'
import Table from '../../Components/Table';
import Importantask from '../../Components/TasksComponents/importantask';
import Card from './Card';
import { useSelector } from 'react-redux';

function Dashboard() {

  const heading =[
    {
      id:1 , 
      title : 'Id'
    },
    {
      id: 2 , 
      title : 'Task Name'
    },
    {
      id:3 , 
      title : 'Descraption'
    },
    {
      id:4 , 
      title : 'DedLine'
    },
    {
      id : 5,
      title : 'Type'
    },
    {
      id : 6,
      title : 'Users'
    },
  ]

  const tasks = useSelector ((state) => state.tasks);

  return (
    <div className='pb-6'>
     <div className='flex justify-center py-2'>
       <Card/>
     </div>
     
    <div className='flex justify-start items-center p-4 space-x-3 bg-transparent '>
     <div className='bg-[#07a0c3] p-1 px-3 rounded-md shadow-sm'>
      <p className='text-lg font-semibold shadow-sm text-white'>P</p>
      </div>
     <h1 className='text-3xl'>Important projects</h1>
    </div>
     
     <div className='py-6'>
    <div className='flex justify-start items-center bg-[#07a0c3] px-5 py-2'>
      <div>
        <h1 className='text-white text-xl'>To-do</h1>
      </div>
    </div>

    <div className='w-full bg-transparent'>
      <Table
      headings={heading}
      width={'w-full'}
      rows={<>
      <tbody className='w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-500 bg-white dark:bg-[#0a0908]'>
        {tasks.map((task)=> {
          return(
            <>
             <Importantask task={task}/>
            </>
          )
        })}
      </tbody>
      </>}
      />
    </div>
     </div>
    
    </div>
  )
}

export default withLayout(Dashboard);