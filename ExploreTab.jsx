import React from 'react'

function ExploreTab(props) {
  return (
    <span className='h-12 w-60 bg-zinc-900 text-white rounded-md max-w-60 px-4 pt-2  text-xl font-bold'> 
           {props.title}
    </span>
  )
}

export default ExploreTab