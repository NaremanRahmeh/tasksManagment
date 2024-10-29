import React, { createContext, useState } from 'react'

export const Menu = createContext('');

function MenuContext({children}) {

  const[isopen , setIsOpen] = useState(true);

  return <Menu.Provider value={{isopen , setIsOpen}}>{children}</Menu.Provider>
}

export default MenuContext