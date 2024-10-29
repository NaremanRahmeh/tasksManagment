import { Dialog, DialogTitle } from '@mui/material'
import React from 'react'
import { MdClose } from 'react-icons/md'

function Dialogs({width , open , close , title , children}) {
  return (
    <>
    <Dialog
     open={open}
     onClose={close}
     fullWidth
     maxWidth={width}>
      <DialogTitle>
        <div className='flex justify-between items-center'>
        <h1>{title}</h1>
        <div>
            <MdClose onClick={close} className="w-[25px] h-[25[px]" />
          </div>
        </div>
      </DialogTitle>
      {children}
    </Dialog>
    </>
  )
}

export default Dialogs