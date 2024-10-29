import React from 'react'

function Button({title , className , type , onclick}) {
  return (
    <>
    <button className={` px-6 py-[3px] text-[18px] text-white rounded-md ${className}`} type={type} onClick={onclick}>
      {title}
    </button>
    </>
  )
}

export default Button