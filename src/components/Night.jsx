import LocationIcon from "./Icons/Location-icon";
import HomeIcon from "./Icons/Home-Icon";
import HeartIcon from "./Icons/Heart-Icon";
import UserIcon from "./Icons/User-Icon";
import { useState, useEffect } from "react";
import Conditions from "./Condition-Data";
import Loader from "./Loader";
import AirQuality from "./Air-Quality";
const Night = (props) => {
  const { selectedCity } = props;
  const [temp, setDayTemp] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filterState, setFilterState] = useState("Home");
  const [airQuality, setAirquality] = useState({})

  const API_KEY = "f9703c47bec948389f382511251501";
  const getWeather = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${selectedCity}&aqi=yes`
      );
      const result = await response.json();
      setIsLoading(false);
      const temprature = result.forecast.forecastday[0].hour[0].temp_c;
      const condition = result.forecast.forecastday[0].hour[0].condition.text;
      const conditionCode = result.forecast.forecastday[0].hour[0].condition.code
      const airquality = result.forecast.forecastday[0].hour[0].air_quality
        result.forecast.forecastday[0].hour[0].condition.code;
      for (let i = 0; i < Conditions.length; i++) {
        if (Conditions[i].code === conditionCode) {
          setIcon(Conditions[i].iconNight);
        }
      }
      setDayTemp(temprature);
      setCondition(condition);
      setCity(result.location.name);
      setAirquality(airquality)
      

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  const handlChangeState = (state) => {
    setFilterState(state);
  };

  return (
    <div className="w-1/2 h-full bg-slate-900 rounded-tr-3xl rounded-br-3xl  flex justify-center items-center">
      <img src="EllipseN.svg" className="absolute mt-[40%] mr-[-25%] w-[8%]" />
      {isLoading == false && (
        <div className="w-1/2 h-3/4 backdrop-blur-md bg-bg-slate/75 shadow-xl backdrop-blur-[2px] rounded-3xl flex flex-col items-center gap-6">
        {filterState=="Home" ? (<> <div className="flex justify-between py-12 w-9/12 ">
            <div>
              <p className="text-gray-400">{new Date().toDateString()}</p>
              <p className="font-extrabold text-white text-5xl ">{city}</p>
            </div>
            <LocationIcon />
          </div>
          <img src={icon} className="w-64 shadow-md" />
          <div>
            <p className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-white to-black">
              {temp}
            </p>
          </div>
          <div className="w-9/12">
            <p className="font-extrabold text-[#777CCE]">{condition}</p>
          </div> </>):null}
          {filterState=="Heart" ? (<AirQuality airQuality={airQuality}/>):null}
          <div className="w-9/12 flex justify-between">
            <HomeIcon
              handlChangeState={handlChangeState}
              color={filterState == "Home" ? "white" : "gray"}
            />
            <LocationIcon
              handlChangeState={handlChangeState}
              color={filterState == "Location" ? "white" : "gray"}
            />
            <HeartIcon
              handlChangeState={handlChangeState}
              color={filterState == "Heart" ? "white" : "gray"}
            />
            <UserIcon
              handlChangeState={handlChangeState}
              color={filterState == "User" ? "white" : "gray"}
            />
          </div>
        </div>
      )}
      {isLoading == true && <Loader />}
    </div>
  );
};
export default Night;
