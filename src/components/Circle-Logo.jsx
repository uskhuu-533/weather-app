const Circels = () => {
    return(
        <>
         <div className="absolute bg-neutral-100 w-[160px] h-[235px]  flex flex-col items-end justify-between">
          <div className="bg-[#0F141E] w-[80px] h-[64px] rounded-bl-full"></div>
          <div className="bg-[#0F141E] w-[50px] h-[160px] absolute mt-12"></div>
          <div className="bg-[#0F141E] w-[80px] h-[64px] rounded-tl-full"></div>
        </div>
        
        <div className="absolute opacity-60 border-[rgba(17, 24, 39, 1)] border-solid w-[1440px] h-[1440px] rounded-full border-[1px]"></div>
        <div className="absolute opacity-60 border-[rgba(17, [1px]4, 39, 1)] border-solid w-[940px] h-[940px] rounded-full border-[1px]"></div>
        <div className="absolute opacity-60 border-[rgba(17, [1px]4, 39, 1)] border-solid w-[640px] h-[640px] rounded-full border-[1px]"></div>
        <div className="absolute opacity-60 border-[rgba(17, [1px]4, 39, 1)] border-solid w-[340px] h-[340px] rounded-full border-[1px]"></div>
        <div className="absolute  border-[rgba(17, [1px]4, 39, 1)] border-solid w-[140px] h-[140px] rounded-full border-[1px] bg-neutral-100 flex justify-center items-center gap-4">
          <img src="Vector.png" className="w-11 h-22" />
          <img src="Vector.png" className="rotate-180 w-11 h-22" />
        </div>
        </>
    )
}
export default Circels