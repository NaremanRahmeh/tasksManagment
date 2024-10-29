// import React, { useState } from 'react'
// import withLayout from '../../Components/WrappingLayout/Wrapping'
// import Button from '../../Components/Button'
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { useDispatch, useSelector } from 'react-redux';
// import { FormLabel, TextField } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';
// import { updateTask } from '../../Components/TasksComponents/TaskReducer';

// function EditTask() {

//     const [state, setState] = useState([]);
//     const {id} = useParams();
//     const tasks  = useSelector ((stat) => stat.tasks);
//     const existTask = tasks.filter(f => f.id == id);
//     const {taskName  , des , startDate , endtDate} = existTask[0] ;
//     const [updatetaskName ,setTaskName] = useState(taskName);
//     const [updatedes ,setDes] = useState(des);
//     const [updatestartDate ,setStartDate] = useState(startDate);
//     const [updateendtDate ,setEndDate] = useState(endtDate);
//     const dispatch =useDispatch();
//     const navigate = useNavigate();
//   // const users = useSelector ((state) => state.users);

//   function handleUpdate(){
//     dispatch(updateTask({
//       taskName : updatetaskName ,
//       des : updatedes ,
//       startDate : updatestartDate ,
//       endtDate : updateendtDate
//     }))
//     navigate('/tasks')
//    }


//     // const handleMultiple = (e) => {
//     //     const {
//     //        target: { value },
//     //     } = e;
//     //     setState(
//     //        typeof value === "string" ? value.split(",") : value
//     //     );
//     //  }; 

//   return (
//     <>
//     <div className='flex justify-between items-center bg-[#07a0c3]  px-5 py-2'>
//       <div>
//         <h1 className='text-white text-xl'>Edit Task</h1>
//       </div>
//     </div>

//     <form className="w-full text-white px-5" onSubmit={handleUpdate}>
//   <div className="md:w-[50%] w-full my-5">
//   <input 
//    type="text"
//    name='taskName' 
//    value={updatetaskName}
//    onChange={e => setTaskName(e.target.value)}
//    className ="py-2 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 " 
//    placeholder="Task Name" 
//    required 
//    />
//   </div>
//   <div className="md:w-[50%] w-full my-5">
//   <input 
//    type="text"
//    name='descraption' 
//    value={updatedes}
//    onChange={e => setDes(e.target.value)}
//    className ="py-2 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 " 
//    placeholder="Descraption" 
//    required 
//    />
//   </div>

//   <div className='flex flex-col space-y-2 w-full'>
//     <div className=" my-5 flex items-center space-x-2">
//       <FormLabel>
//         <p className='text-white'>Start Date </p>
//         </FormLabel>
//         <input 
//         type='date'
//         name='startDate'
//         value={updatestartDate}
//         onChange={e => setStartDate(e.target.value)}
//         placeholder='start date'
//         className='text-sm bg-transparent text-white border-gray-300 p-[2px] rounded-sm border-b-[1px] outline-none'
//         />
//   </div>
//   <div className="my-5 flex items-center space-x-2">
//       <FormLabel className='text-white'>
//       <p className='text-white'>End Date</p>
//        </FormLabel>
//       <input 
//         type='date'
//         name='endDate'
//         value={updateendtDate}
//         onChange={e => setEndDate(e.target.value)}
//         placeholder='End Date'
//         className='text-sm bg-transparent text-white border-b-[1px] border-gray-300 p-[2px] rounded-sm  outline-none'
//         />
//   </div>
//     {/* <div className='py-3'>
//     <FormControl
//        variant="standard"
//        size="large"
//        sx={{ m: 1, minWidth: 120 }}>
//        <InputLabel id="select" label="Lang">
//         Select Users
//        </InputLabel>
//         <Select
//           multiple
//           value={state}
//           onChange={handleMultiple}>
//            {users.map((user) => (
//           <MenuItem key={user} value={user}>
//           {user.name}
//            </MenuItem>
//             ))}
//           </Select>
//          </FormControl>
//       </div>  */}

//   </div>
//    <Button 
//    title={'Update Edit'}
//    type={'submit'}
//    className={'text-white bg-[#07a0c3] my-4'}
//    />
// </form>
//     </>
//   )
// }

// export default withLayout(EditTask)
