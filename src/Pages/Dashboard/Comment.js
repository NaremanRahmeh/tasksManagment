import React from 'react'

function Comment() {
   
    const data=[
        {
            id:1,
            name : 'Nareman Rh',
            n : 'NR',
            position :'Front End' , 
            whats : '0937322291'
        },
        {
            id: 2,
            name : 'Yaman Ls',
            n : 'YL',
            position :'Flutter' , 
            whats : '0937322291'
        },
        {
            id: 3,
            name : 'Nara',
            n : 'N',
            position :'Back End' , 
            whats : '0937322291'
        },
        {
            id: 4,
            name : 'Rima',
            n : 'R',
            position :'Ui Ux' , 
            whats : '0937322291'
        },
    ]
  return (
    <>
      <div>
        {data.map((team ,i)=>{
            return(
            <>
        <div key={i} className='flex justify-start items-center gap-x-3 border-t border-[#9696963b] py-2 text-black dark:text-white'>
        <div>
        <p className='bg-gray-300 text-xs rounded-full  w-[30px] h-[30px] flex justify-center items-center text-[#0a0908] font-semibold'>{team.n}</p>
        </div>
        <div>
           <h2 className='text-[15px]'>{team.name}</h2>
           <p className='text-[12px] text-gray-700 dark:text-gray-300'>{team.position}</p>
        </div>
      </div>
            </>
            )
        })}
      </div>
    </>
  )
}

export default Comment