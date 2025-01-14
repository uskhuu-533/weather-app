import SearchBar from "./SearchBar";
const Day = () => {
    return(
        <div className="w-1/2 h-full bg-neutral-100 rounded-tl-3xl rounded-bl-3xl flex flex-col justify-center items-center">
            <img src="EllipseDay.svg" className="mt-[-40%] ml-[-25%] absolute"/>
           
            <div className="w-1/2 h-3/4 backdrop-brightness-20 shadow-lg backdrop-blur-[2px] rounded-3xl flex flex-col items-center gap-10">
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
              <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
                -10.1°
              </div>
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
             <SearchBar />
          </div>
    )
} 
export default Day