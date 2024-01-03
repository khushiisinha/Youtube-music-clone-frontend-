import React from 'react'
import { Link } from 'react-router-dom'
function NavbarTabs(props) {
  return (
   
    <Link  className='text-white font-semibold flex py-2 rounded-md hover:bg-slate-600 '>
       <img src={props.image} alt="image" className=' h-6 w-10 px-2' />
       <button className='text-xl'>{props.name}</button>
    </Link>
    
  )
}

export default NavbarTabs