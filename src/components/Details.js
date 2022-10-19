import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Card.css";

export default function Details(prop) {
    const location = useLocation();
    const {data} = location.state;
    let [index__state,setIndex] = useState(0);

    function changer(e){
       setIndex(Number(e.target.innerText)-1)
    }
  return (
    <div className='card'>
       <Link className='bak' to='/'>Back</Link>
        <div className='img'>
            <img src={data.images[index__state]}/>
            {data.images.map((e,index) => {
                return (
                    <span onClick={changer} key={index} active={index == index__state ? 'active' : 'notActive'}>{index+1}</span>
                )
            })}
        </div>
        <div className='details'>
            <div className='info'>
                <span>{data.title}</span>
                <span>{data.price}$</span>
            </div>
            <div className='dis'>{data.description}</div>
            <button>ADD</button>
        </div>

    </div>
  )
}
