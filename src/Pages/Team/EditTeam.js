import React, { useState } from 'react'
import withLayout from '../../Components/WrappingLayout/Wrapping'
import Button from '../../Components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../Components/UserComponents/UserReducer';

function EditTeam() {

    const{id} = useParams();
    const users = useSelector ((state) => state.users);
    const existingUser = users.filter((f)=> f.id == id);
    const{name , position , password} = existingUser[0];
    const [username ,setName] = useState(name);
   const [userposition , setPosition] = useState(position);
   const [userpossword , setPassword] = useState(password);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   function handleUpdate(){
    dispatch(updateUser({
        id : id ,
        name : username ,
        position : userposition ,
        password : userpossword
    }))
    navigate('/team')
   }

  return (
     <>
        <div className='flex justify-between items-center bg-[#07a0c3] px-5 py-2'>
      <div>
        <h1 className='text-white text-xl'>Edit Users</h1>
      </div>
    </div>


    <form className="w-full dark:text-white px-5" onSubmit={handleUpdate}>
  <div className="md:w-[50%] w-full my-5">
  <input
     type="text"
     name="name"
     className ="py-2 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 " 
     placeholder="User Name"
     value={username}
     onChange={e => setName(e.target.value)}
      required/>
  </div>
  <div className="md:w-[50%] w-full my-5">
  <input
   type="password"
   name="password"
   value={userpossword}
   onChange={e => setPassword(e.target.value)}
   className ="py-2 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 " 
   placeholder="Password"
   required/>
  </div>
  <div className="md:w-[50%] w-full my-5">
  <div className='form-check'>
   <input type='radio' 
   name='position'
    value='Front End'
    defaultValue={userposition}
    onChange={e => setPosition(e.target.value)}
    id='radioDefault1'
   className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
   <label htmlFor='radioDefault1' className='inline-block dark:text-white'>
   Front End
  </label>
   </div>
  <div className='form-check'>
  <input type='radio' 
  name='position'
  defaultValue={userposition}
  onChange={e => setPosition(e.target.value)}
  value='Ui Ux'
   id='radioDefault2'
  className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
  <label htmlFor='radioDefault2' className='inline-block dark:text-white'>
     Ui Ux
  </label>
  </div>
  <div className='form-check'>
   <input type='radio' 
     name='position'
    value='Flutter'
    defaultValue={userposition}
    onChange={e => setPosition(e.target.value)}
     id='radioDefault3'
     className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
    <label htmlFor='radioDefault3' className='inline-block dark:text-white'>
     Flutter
    </label>
    </div>
    <div className='form-check'>
   <input type='radio' 
   name='position'
   defaultValue={userposition}
   onChange={e => setPosition(e.target.value)}
   value='Back End'
   id='radioDefault4'
    className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
    <label htmlFor='radioDefault4' className='inline-block dark:text-white'>
       Back End
       </label>
      </div>
  </div>  
   <Button 
   title={'Update Edit'}
   type={'submit'}
   className={'text-white bg-[#07a0c3] my-4'}
   />
</form>
     </>
  )
}

export default withLayout(EditTeam)