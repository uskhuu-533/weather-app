const Circels = () => {
    return(
        <>
         <div className="absolute bg-neutral-100 w-[160px] h-[235px]  flex flex-col items-end justify-between">
          <div className="bg-slate-900 w-[80px] h-[64px] rounded-bl-full"></div>
          <div className="bg-slate-900 w-[50px] h-[160px] absolute mt-12"></div>
          <div className="bg-slate-900 w-[80px] h-[64px] rounded-tl-full"></div>
        </div>
        <div className="absolute border-black-400 border-solid w-[940px] h-[940px] rounded-full border-2"></div>
        <div className="absolute border-black-400 border-solid w-[540px] h-[540px] rounded-full border-2"></div>
        <div className="absolute border-black-400 border-solid w-[340px] h-[340px] rounded-full border-2"></div>
        <div className="absolute border-black-400 border-solid w-[140px] h-[140px] rounded-full border-2 bg-neutral-100 flex justify-center items-center gap-4">
          <img src="Vector.svg" className="w-11 h-22" />
          <img src="Vector.svg" className="rotate-180 w-11 h-22" />
        </div>
        </>
    )
}
export default Circels