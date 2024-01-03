import React from 'react'

function BodyTab(props) {
  return (
    <button className='p-1 px-2 bg-slate-400 text-white rounded-lg text-base hover:bg-slate-800'>
    {props.title}
    </button>
  )
}

export default BodyTab