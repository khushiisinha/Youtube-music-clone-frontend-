import React from "react";
import SearchInput from "./SearchInput";
import BodyTab from "./BodyTab";
import { bodyTab } from "./Data";
import BodyDiv from "./BodyDiv";
function Body() {
  return (
    <div className=" p-4 w-full flex flex-col gap-10 w-full ml-20">
      <div className="flex justify-around ">
        <SearchInput />
        <div className="bg-slate-800 rounded-full w-10 h-10 ml-auto"></div>
      </div>

      <div className="flex gap-4">
        {bodyTab.map((elem, index) => {
          return <BodyTab title={elem} />;
        })}
      </div>
      <div className="flex flex-col">
        <div className="flex mt-2">
          <div className="h-16 w-16 rounded-full bg-slate-600 mt-1"></div>
          <div className="p-2 flex flex-col">
            <span className="text-zinc-50"> KHUSHI SINHA</span>
            <button className="text-3xl text-white font-bold hover:underline">Listen Again</button>
          </div>
          </div>
          <div className=" flex justify-start">
            <BodyDiv />
            <BodyDiv />
            <BodyDiv />
            <BodyDiv />
         
        </div>
      </div>

      <div className="mt-20 ">
        <button className="text-white font-bold text-3xl ml-4 hover:underline">
          Forgotten Favourites
        </button>
        <div className="mt-2 flex justify-start ">
          <BodyDiv />
          <BodyDiv />
          <BodyDiv />
          <BodyDiv />
        </div>
      </div>
    </div>
  );
}

export default Body;
