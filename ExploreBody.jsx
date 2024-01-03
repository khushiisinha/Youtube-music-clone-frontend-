import React from 'react'
import SearchInput from "./SearchInput";
import ExploreTab from './ExploreTab';
import { exploreTab } from "./Data";
import BodyDiv from "./BodyDiv";

function ExploreBody() {
  return (
    <div className=" p-4 w-full flex flex-col gap-16 w-full ml-20">
    <div className="flex justify-around ">
      <SearchInput />
      <div className="bg-slate-800 rounded-full w-10 h-10 ml-auto"></div>
    </div>

    <div className="flex gap-4">
      {exploreTab.map((elem, index) => {
        return <ExploreTab title={elem} />;
      })}
    </div>
    <div className="">
      <button className='text-white font-bold text-4xl ml-4 hover:underline'>New albums & Singles</button>
        <div className="mt-2 flex justify-start">
          <BodyDiv />
          <BodyDiv />
          <BodyDiv />
          <BodyDiv />
       
      </div>
    </div>

    <div className="">
      < button className="text-white font-bold text-3xl ml-4 hover:underline">
        Moods & Genres
      </button>
      <div className="mt-2 flex justify-start ">
        <BodyDiv />
        <BodyDiv />
        <BodyDiv />
        <BodyDiv />
      </div>
    </div>
  </div>
  )
}

export default ExploreBody