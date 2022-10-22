import React, { createContext, useState } from 'react'


const Data = createContext();

const Context = ({children}) => {
  let [data,setData] = useState('abdo');
  function changer(newVal){
    setData(newVal);
  }
  return (
    <Data.Provider value={{data,changer}}>
        {children}
    </Data.Provider>
  )
}

export {Context,Data}