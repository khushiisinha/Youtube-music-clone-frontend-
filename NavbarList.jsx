import React from 'react'

function NavbarList(props) {
  return (
    <div className='text-white mt-2 hover:bg-slate-600 p-2 rounded-md'>
        <div className='text-base font-semibold'>{props.title}</div>
        <div className='text-xs font-thin'>{props.name}</div>
    </div>
  )
}

export default NavbarList