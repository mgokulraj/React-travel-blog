import React from "react";
import beachVid from "./../assets/beachVid.mp4";
import TitleUpdate from "./TitleUpdate";

const Home = () => {
  TitleUpdate("Home");
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-screen object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
    </div>
  );
};

export default Home;
