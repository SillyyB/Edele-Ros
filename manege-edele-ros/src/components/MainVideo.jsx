import React from "react";
import video from "../assets/pexels-video.mp4";
import Logo from "../components/Logo";

const MainVideo = () => {
  return (
    <div className="">
      <video classname="h-screen" src={video} autoPlay muted loop />

      <div className="absolute top-0 w-full h-full bg-black/60">
        {/* logo */}
        <Logo />

        {/* navbar */}
        <div className="flex justify-between px-4 mx-0 md:px-10  lg:px-20 xl:px-96 xl:mx-72 pt-8">
          <div>
            <ul className="flex space-x-8 lg:space-x-20 font-cormorant text-2xl text-white font-light">
              <li>Boek een les</li>
              <li>Over ons</li>
              <li>..</li>
            </ul>
          </div>
          <div>
            <button className="font-cormorant text-xl text-white font-light border-2 border-amber-500 rounded py-1 px-4 hover:bg-amber-500 tracking-wider">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;