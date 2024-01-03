import React from "react";
import line from "./Images/line.png";
import NavbarTabs from "./NavbarTab";
import youtube from "./Images/youtube-music.png";
import playlist from "./Images/playlist.png";
import NavbarList from "./NavbarList";
import { navbarTabs, images,navLink } from "./Data";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="border-r-2  border-#030303 text-white w-60 flex-col gap-8 p-4 h-screen">
      <div className=" flex gap-4">
        <div className=" ">
          <img src={line} alt="Line" className="h-8 w-8  mt-1" />
        </div>

        <div className="flex">
          <img src={youtube} alt="image" className=" h-8 w-8 mt-1 " />
          <span className="text-3xl font-bold">Music</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-8 ">
        {navbarTabs.map((elem, index) => {
          return <NavbarTabs image={images[index]} name={elem} navLink={navLink[index]}/>;
        })}
      </div>

      <div className="border-b-2 border-#030303 mt-4 "></div>

      <div className=" ">

        <div className="bg-gray-700 rounded-2xl flex gap-2 justify-center p-2 mt-4">
          <img src={playlist} alt="" className="h-6 w-6" />
          <button>
            <span className="font-semibold ">New Playlist</span>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto">
          <NavbarList name="Khushi Sinha" title="Liked Music" />
          <NavbarList name="Khushi Sinha" title="Soulful" />
          <NavbarList name="Khushi Sinha" title="Moody" />
        </div>

      </div>
         {/* <div>
          <Link to="/explore" className="h-5 w-5 border border-white"> Explore </Link>
         </div> */}
    </div>
  );
}

export default Navbar;
