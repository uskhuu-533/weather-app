import LocationIcon from "./Location-icon";
import HomeIcon from "./Home-Icon";
import HeartIcon from "./Heart-Icon";
import UserIcon from "./User-Icon";
import { useState, useEffect } from "react";
const Night = (props) => {
  const { selectedCity } = props;
  const [temp, setDayTemp] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [condition, setCondition] = useState("")

  const API_KEY = "f9703c47bec948389f382511251501";
  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${selectedCity}`
      );
      const result = await response.json();
      setDayTemp(result.forecast.forecastday[0].hour[0].temp_c);
      setCondition(result.forecast.forecastday[0].hour[0].condition.text)
      setCity(result.location.name);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, [selectedCity]);
  return (
    <div className="w-1/2 h-full bg-slate-900 rounded-tr-3xl rounded-br-3xl  flex justify-center items-center">
      <img src="EllipseN.svg" className="absolute mt-[40%] mr-[-25%] w-[8%]" />
      <div className="w-1/2 h-3/4 backdrop-blur-md bg-bg-slate/75 shadow-xl backdrop-blur-[2px] rounded-3xl flex flex-col items-center gap-10">
        <div className="flex justify-between py-12 w-9/12 ">
          <div>
            <p className="text-gray-400">{new Date().toDateString()}</p>
            <p className="font-extrabold text-white text-5xl ">{city}</p>
          </div>
          <LocationIcon />
        </div>
        <img src="moon.svg" className="w-64" />
        <div>
          <p className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-white to-black">
            {temp}
          </p>
        </div>
        <div className="w-9/12">
          <p className="font-extrabold text-[#777CCE]">{condition}</p>
        </div>
        <div className="w-9/12 flex justify-between">
          <HomeIcon color="white" />
          <LocationIcon />
          <HeartIcon />
          <UserIcon />
        </div>
      </div>
    </div>
  );
};
export default Night;
