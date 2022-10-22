import React, { useEffect, useMemo, useState } from 'react'

export const Memo = () => {
    let randomColor = '#' + Math.floor(Math.random() * 29489323);
    let [counter,setCounter] = useState(0);
    let [test,setTest] = useState(0);


    let seter = () => {
        setCounter(counter + 1)
    }
    let seter__2 = () => {
        setTest(test + 1)
    }


  let result = useMemo(()=>{
       return ( <div style={{backgroundColor: randomColor}}>Tets</div>)
    },[counter])

  return (
    <>
    <div style={{padding:"30px"}}>
        {result}
        <div>{counter}</div>
        <div>{test}</div>
        <button style={{padding:"10px 30px", margin:"20px"}} onClick={() => {seter()}}>+</button>
        <button style={{padding:"10px 30px", margin:"20px"}} onClick={() => {seter__2()}}>Change</button>
    </div>
    </>
  )
}
