import { useState } from "react";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-400">
      <div className="absolute bg-neutral-100 w-[160px] h-[235px]  flex flex-col items-end justify-between">
          <div className="bg-slate-900 w-[80px] h-[64px] rounded-bl-full" ></div>
          <div className="bg-slate-900 w-[50px] h-[160px] absolute mt-12"></div>
          <div className="bg-slate-900 w-[80px] h-[64px] rounded-tl-full" ></div>
          
        </div>
        <div className="absolute border-black-400 border-solid w-[940px] h-[940px] rounded-full border-2"></div>
        <div className="absolute border-black-400 border-solid w-[540px] h-[540px] rounded-full border-2"></div>
        <div className="absolute border-black-400 border-solid w-[340px] h-[340px] rounded-full border-2"></div>
        <div className="absolute border-black-400 border-solid w-[140px] h-[140px] rounded-full border-2 bg-neutral-100 flex justify-center items-center gap-4">
          <img src="Vector.svg" className="w-11 h-22"/>
          <img src="Vector.svg" className="rotate-180 w-11 h-22" />
        </div>

       
        <div className="w-full h-full rounded-3xl flex bg-neatral-100">
          <div className="w-1/2 h-full bg-neutral-100 rounded-tl-3xl rounded-bl-3xl flex justify-center items-center">
            <div className="w-1/2 h-3/4 bg-white/75 shadow-lg backdrop-blur-[2px] rounded-3xl flex flex-col items-center gap-10">
              <div className="flex justify-between py-12 w-9/12 ">
                <div>
                  <p className="text-gray-400">{new Date().toDateString()}</p>
                  <p className="font-extrabold text-gray-900 text-5xl ">
                    Ulaanbaatar
                  </p>
                </div>
                <img src="./public/location.svg" />
              </div>
              <img src="sunny.png" className="w-64" />
              <div className="font-bold text-9xl text-gray-400">-10.1</div>
              <div className="w-9/12">
                <p>aaa</p>{" "}
              </div>
              <div className="w-9/12 flex justify-between">
                <img src="Home.svg" />
                <img src="location.svg" />
                <img src="vektor.svg" />
                <img src="User.svg" />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full bg-slate-900 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl  flex justify-center items-center">
            <div className="w-1/2 h-3/4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
