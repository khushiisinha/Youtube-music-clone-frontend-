import React from 'react'
import search from "./Images/search.png";
function SearchInput() {
  return (
    <div className=' ml-20 flex bg-zinc-600 p-2 gap-3 rounded-lg'>
        <img src={search} alt="img" className='w-6 h-6' />
       <input type="text" className=' bg-zinc-600 border-hidden  w-96 outline-none' placeholder=' Search songs, albums, artists, podcasts' />

       </div>
  )
}

export default SearchInput