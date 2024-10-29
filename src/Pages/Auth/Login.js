import { useState } from "react";
import Button from "../../Components/Button";
import logo2 from '../../images/logo2.png'
import { useNavigate } from "react-router-dom";


function Login() {

  const[email , setEmail] = useState('');
  const[password , setPassword] = useState('');
  const[accept , setAccept] = useState(false);
  const navigate = useNavigate();

  console.log(email);

  function Submit(e) {
     e.preventDefault();
     setAccept(true);
      navigate('/dashboard')
     
  }

  return (
    <div className='flex justify-center items-center w-full h-screen bg-white dark:bg-[#0a0908]'>
         <div className='flex flex-col shadow-[0_0_4px_0px_rgba(0,0,0,0.3)] text-black
          dark:shadow-[0_0_4px_0px_rgba(255,255,255,0.3)] dark:text-white py-3 px-10 font-sans md:w-[400px] w-full bg-white dark:bg-[#0a0908] rounded-md'>
     <div className='w-full flex justify-center items-center'>
      <img src={logo2} alt='logo' className='w-[180px]' />
     </div>
     <form onSubmit={Submit} className='w-full flex flex-col justify-center items-center' >
      <div className=' flex flex-col gap-y-1 py-6'>
        <label className='text-[18px]'>
          Email:
          </label>
        <input
         className='border-b-[1px] outline-none dark:bg-[#0a0908] py-1 px-1 md:w-[300px] w-full'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           required/>
      </div>

      <div className='flex flex-col gap-y-1 pb-2'>
        <label className='text-[18px]'>
          Password:
          </label>
        <input 
        className='border-b-[1px] outline-none dark:bg-[#0a0908] py-1 px-1 md:w-[300px] w-full'
         type='password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
          required/>
          { password.length < 8 && accept && <p className='text-red-600 py-1'>password must be more than 8 char</p>}
      </div>
      <div className='w-full flex justify-center items-center py-4'>
      <Button 
     type={'submit'}
     title={'Login'}
     className={`bg-[#07a0c3] my-4`}
   />
      </div>
     </form> 
     </div>
    </div>
  )
}

export default Login