import React from 'react'
import AllTasks from '../../Components/TasksComponents/TaskData';
import { useSelector } from 'react-redux';
import withLayout from '../../Components/WrappingLayout/Wrapping';

function ComplitedTasks() {

    const tasks = useSelector ((state) => state.tasks);
  return (
    <>
       <div className='w-full'>
      <div className='flex justify-between items-center bg-[#07a0c3]  px-5 py-2'>
      <div>
        <h1 className='text-white text-xl'>Complited Tasks</h1>
      </div>
    </div>
  
    <div className='flex items-center justify-center w-full my-6 pb-4'>
    <div className="md:w-[90%] w-full py-4">
     <div className=" w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {tasks.map((task)=> {
        return(
          <>
          {task.stat === 'Complited' &&
      <AllTasks task={task}/>
      }
    </>
        )
      })}
     </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default withLayout(ComplitedTasks)