import React, { useState } from 'react'
import withLayout from '../../Components/WrappingLayout/Wrapping'
import Button from '../../Components/Button'
import AllTasks from '../../Components/TasksComponents/TaskData';
import Dialogs from '../../Components/Dialog';
import { DialogContent, FormLabel, TextField } from '@mui/material';
import {useDispatch ,useSelector} from 'react-redux'
import { addTask } from '../../Components/TasksComponents/TaskReducer';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Tasks() {
   
  const [taskName ,setTaskName] = useState('');
  const [des , setDes] = useState('');
  const [startDate , setStartDate] = useState('');
  const [endtDate , setEndDate] = useState('');
  // const [selectusers , setSelectUsers] = useState([]);
  const tasks = useSelector ((state) => state.tasks);
  const dispatch = useDispatch();
  const [openDialog , setOpenDialog] = useState(false);
  const [state, setState] = useState([]);
  const users = useSelector ((state) => state.users);

  const handleMultiple = (e) => {
     const {
        target: { value },
     } = e;
     setState(
        typeof value === "string" ? value.split(",") : value
     );
  };

  function openAddTask(){
     setOpenDialog(true);
  }

  function closeAddTask(){
      setOpenDialog(false);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const res= dispatch(addTask({id :tasks [tasks.length - 1].id + 1 , taskName , des,startDate ,endtDate }));
    setOpenDialog(false);
    console.log(res)
 }  

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center bg-[#07a0c3]  px-5 py-2'>
      <div>
        <h1 className='text-white text-xl'>All Tasks</h1>
      </div>
      <div>
        <Button
        className={`border-white border-[1px]`}
        title={'Add New Task'}
        onclick={openAddTask}
        />
      </div>
    </div>
  
    <div className='flex items-center justify-center w-full my-6 pb-4'>
    <div className="md:w-[90%] w-full py-4">
     <div className=" w-full grid md:grid-cols-3 grid-cols-1 gap-6">
      {tasks.map((task)=> {
        return(
          <>
    <AllTasks task={task}/>
    </>
        )
      })}
     </div>
     </div>
    </div>

    <Dialogs
    open={openDialog}
    width={'md'}
    title={'Add New Task'}
    close={closeAddTask}
    >
     <DialogContent>
       

<form className="w-full" onSubmit={handleSubmit}>
  <div className="md:w-[50%] w-full my-5">
  <input 
   type="text"
   name='taskName' 
   onChange={e => setTaskName(e.target.value)}
   className ="py-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 " 
   placeholder="Task Name" 
   required 
   />
  </div>
  <div className="md:w-[50%] w-full my-5">
  <input 
   type="text"
   name='descraption' 
   onChange={e => setDes(e.target.value)}
   className ="py-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 " 
   placeholder="Descraption" 
   required 
   />
  </div>

  <div className='flex space-x-6 w-full'>
    <div className=" my-5 flex items-center space-x-2">
      <FormLabel>Start Date </FormLabel>
    <TextField 
    type="date"
    name='startDate'
    onChange={e => setStartDate(e.target.value)}
    placeholder='Start Date'
    className='text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600'
    />
  </div>
  <div className="my-5 flex items-center space-x-2">
      <FormLabel>End Date </FormLabel>
    <TextField 
    type="date"
    name='endtDate'
    onChange={e => setEndDate(e.target.value)}
    placeholder='End Date'
    className='text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600'
    />
  </div>
    <div>
    <FormControl
       variant="standard"
       size="large"
       sx={{ m: 1, minWidth: 120 }}>
       <InputLabel id="select" label="Lang">
        Select
       </InputLabel>
        <Select
          multiple
          value={state}
          onChange={handleMultiple}>
           {users.map((user) => (
          <MenuItem key={user} value={user}>
          {user.name}
           </MenuItem>
            ))}
          </Select>
         </FormControl>
      </div> 

  </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

     </DialogContent>
    </Dialogs>
    </div>
  )
}

export default withLayout(Tasks)