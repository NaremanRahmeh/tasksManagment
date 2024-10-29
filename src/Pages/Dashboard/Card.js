import React from 'react'
import { AiOutlineFileSync } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
import { FaUserGroup } from 'react-icons/fa6'
import { GoComment } from 'react-icons/go'
import Comment from './Comment'
import { Link } from 'react-router-dom'


function Card() {

  const data=[
    {
        id:1 ,
        title : 'Completed Task' ,
        icon : <BiTask size={30}/> ,
        total : '34'
    },
    {
        id:2 ,
        title : 'All Users' ,
        icon : <FaUserGroup size={30}/> ,
        total : '15'
    },
    {
        id:3 ,
        title : 'In Progrees Task' ,
        icon : <AiOutlineFileSync size={30}/> ,
        total : '6'
    },
  ]

  return (
    <div className='w-full'>
    <div className='flex lg:flex-row flex-col'> 
     <div className='lg:w-[60%] w-[95%]'>
     <div className='flex justify-start items-center p-4 space-x-3 bg-transparent'>
     <div className='bg-[#07a0c3] p-1 px-3 rounded-md shadow-sm '>
      <p className='text-lg font-semibold shadow-sm text-white '>O</p>
      </div>
     <h1 className='text-3xl'>OverFlow</h1>
    </div>
     <div className='flex justify-center'>
     <div className='flex md:flex-row flex-col gap-y-2 gap-x-4 w-[95%]'>
    {data.map((card ,i)=>{
        return(
            <>
        <div key={i} 
        className='md:w-[36%] w-full bg-transparent shadow-[0_0_3px_0px_rgba(0,0,0,0.2)] dark:shadow-[0_0_4px_0px_rgba(255,255,255,0.3)] p-4 py-4 flex flex-col gap-y-2 justify-center items-center'>
          <div className='text-[#07a0c3]'>
           {card.icon}
         </div> 
         <h3 className='text-lg'>{card.title}</h3>   
         <p className='text-[25px] font-bold'>{card.total}+</p>          
       </div>
            </>
        )
    })
    }
    </div>
    </div>
    </div>
    <div className='text-black shadow-[0_0_2px_0px_rgba(0,0,0,0.3)]  dark:text-white dark:shadow-[0_0_2px_0px_rgba(255,255,255,0.3)] lg:w-[40%] w-[95%] m-5 p-5'>
       <div className='flex justify-between items-center py-2'>
        <h2 className='text-[18px]'>Team Member</h2>
        <Link to='/team' className='text-[#07a0c3]'>View All</Link>
       </div> 
       <div>
        <Comment/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Card