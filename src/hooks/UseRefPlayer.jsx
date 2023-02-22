import React, { useRef } from "react";
import  sim from "../components/assets/sim.mp4"

const UseRefPlayer = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div className="pt-20">
      <div className="gap-7">
        <button className="bg-green-600 p-5 pl-[100px] pr-[100px] border border-slate-400 hover:bg-green-500 rounded-2xl ml-[450px]" onClick={handlePlay}>
          Start Simulation
        </button>
        <button className="bg-red-600 p-5 pl-[100px] pr-[100px] border border-slate-400 ml-7 hover:bg-red-500 rounded-2xl" onClick={handlePause}>
          Stop Simulation
        </button>
      </div>
      <video width="520" height="240" className="mt-7 ml-[450px] w-[650px]" ref={videoRef}>
        <source src={sim} />
      </video>
    </div>
  );
};

export default UseRefPlayer;
