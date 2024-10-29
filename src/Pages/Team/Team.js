import { DialogContent } from "@mui/material";
import Button from "../../Components/Button";
import Table from "../../Components/Table";
import ComponentUser from "../../Components/UserComponents/UserData";
import Dialogs from "../../Components/Dialog";
import { useState } from "react";
import withLayout from "../../Components/WrappingLayout/Wrapping";
import { addUser } from "../../Components/UserComponents/UserReducer";
import {useDispatch ,useSelector} from 'react-redux'

function Team() {
     
  // const[user ,setuser] = useState([]);

  // useEffect(()=> {
  //     fetch('api').then((res) => res.json()).then((data) => setuser(data));
  // } , [user]);

  //   async function deleteUser(id) {
  //   const res = await axios.delete(`api${id}`)
  // }
      
   const users = useSelector ((state) => state.users);

   const [name ,setName] = useState();
   const [position , setPosition] = useState();
   const [password , setPassword] = useState();
   const dispatch = useDispatch();
  
   
  const [openDialog , setOpenDialog] = useState(false);

  function openAddUser(){
     setOpenDialog(true);
  }

  function closeAddUser(){
      setOpenDialog(false);
  }

  const handleSubmit = (event) =>{
     event.preventDefault();
     dispatch(addUser({id :users [users.length - 1].id + 1 , name , position ,password}));
     setOpenDialog(false);
  }  


  const heading =[
    {
      id:1 , 
      title : 'Id'
    },
    {
      id:2 , 
      title : 'Name'
    },
    {
      id:3 , 
      title : 'Password'
    },
    {
      id:4 , 
      title : 'Position'
    },
    {
      id : 5,
      title : 'Edit'
    }
  ]


  return (
    <div className='w-full'>
    <div className='flex justify-between items-center bg-[#07a0c3] px-5 py-2'>
      <div>
        <h1 className='text-white text-xl'>All Team</h1>
      </div>
      <div>
        <Button
        className={`border-white border-[1px]`}
        title={'Add New User'}
        onclick={openAddUser}
        />
      </div>
    </div>

    <div className="relative overflow-x-auto shadow-sm">
      <Table 
      headings={heading}
      width={'w-full'}
       rows={<>
       <tbody >
        
        {users.map((user , i) =>{
          return(
            <>
             {user.role === 'employee' &&
            <ComponentUser user={user} key={i}/>
             }
            </>
          )
        } )}
       </tbody>
       </>} />

    </div>

    <Dialogs
    open={openDialog}
    close={closeAddUser}
    title={'Add New User'}
    width={'md'}
    >
      <DialogContent >
      <div>
         <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-7">
            <div className="w-[50%]">
            <input
             type="text"
             name="name"
             onChange={e => setName(e.target.value)}
             className="outline-none border-b-2 border-gray-300  w-full transition-all duration-700"
             placeholder="Name"
             required/>
            </div>

            <div className="w-[50%]">
            <input
             type="password"
             name="password"
             onChange={e => setPassword(e.target.value)}
             className="outline-none border-b-2 border-gray-300  w-full transition-all duration-700"
             placeholder="Password"
             required/>
            </div>

            </div>
            <div className='flex gap-x-8 mt-6 w-full'>
            <div className='form-check'>
            <input type='radio' 
            name='position'
            onChange={e => setPosition(e.target.value)}
            value='Front End'
            id='radioDefault1'
            required
            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
            <label htmlFor='radioDefault1' className='inline-block text-gray-700'>
            Front End
            </label>
            </div>
            <div className='form-check'>
            <input type='radio' 
            name='position'
            onChange={e => setPosition(e.target.value)}
            value='Ui Ux'
            id='radioDefault2'
            required
            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
            <label htmlFor='radioDefault2' className='inline-block text-gray-700'>
             Ui Ux
            </label>
            </div>
            <div className='form-check'>
            <input type='radio' 
            name='position'
            onChange={e => setPosition(e.target.value)}
            value='Flutter'
            id='radioDefault3'
            required
            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
            <label htmlFor='radioDefault3' className='inline-block text-gray-700'>
            Flutter
            </label>
            </div>
            <div className='form-check'>
            <input type='radio' 
            name='position'
            onChange={e => setPosition(e.target.value)}
            value='Back End'
            id='radioDefault4'
            required
            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
            <label htmlFor='radioDefault4' className='inline-block text-gray-700'>
            Back End
            </label>
            </div>
            </div>
          <Button
          className={`my-6 bg-blue-600 text-white`}
          title={'Submit'}
           />
         </form>
        </div>
      </DialogContent>

    </Dialogs>

    </div>
  )
}

export default withLayout(Team);