import SearchBar from "./SearchBar";
import HomeIcon from "./Home-Icon";
import LocationIcon from "./Location-icon";
import HeartIcon from "./Heart-Icon";
import UserIcon from "./User-Icon";
import { useEffect, useState } from "react";
import Conditions from "./condition";
import Loader from "./Loader";
import AirQuality from "./Air-Quality";

const Day = (props) => {
  const [dayTemp, setDayTemp] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { selectedCity } = props;
  const API_KEY = "f9703c47bec948389f382511251501";
  const [filterState, setFilterState] = useState("Home");
  const [airQuality, setAirquality]=useState({})
  const getWeather = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${selectedCity}&aqi=yes`
      );
      const result = await response.json();
      setIsLoading(false);
      const condCode = result.forecast.forecastday[0].day.condition.code;
      const temprature = result.forecast.forecastday[0].hour[5].temp_c;
      const condition = result.forecast.forecastday[0].day.condition.text;
      const airquality = result.forecast.forecastday[0].hour[5].air_quality
      const city = result.location.name;
      setAirquality(airquality)

      for (let i = 0; i < Conditions.length; i++) {
        if (Conditions[i].code === condCode) {
          setIcon(Conditions[i].iconDay);
        }
      }
      setDayTemp(temprature);
      setCondition(condition);
      setCity(city);
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
    <div className="w-1/2 h-full min-w-[567px] bg-neutral-100 rounded-tl-3xl rounded-bl-3xl flex flex-col justify-center items-center">
      <img src="EllipseDay.svg" className="mt-[-40%] ml-[-25%] absolute" />

      {isLoading === false && (
        <div className="w-1/2 h-3/4 backdrop-brightness-20 shadow-lg backdrop-blur-[2px] rounded-3xl flex flex-col items-center gap-6">
          {filterState=="Home" ?(<><div className="flex justify-between py-12 w-9/12 ">
            <div>
              <p className="text-gray-400">{new Date().toDateString()}</p>
              <p className="font-extrabold text-gray-900 text-5xl ">{city}</p>
            </div>
            <LocationIcon />
          </div>
          <img src={icon} className="w-64" />
          <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
            {dayTemp}°
          </div>

          <div className="w-9/12">
            <p className="text-[#FF8E27] font-extrabold h-6"> {condition} </p>
          </div></>):null}
          {filterState == "Heart"?(<AirQuality airQuality={airQuality} />):null}
          <div className="w-9/12 flex justify-between">
            <HomeIcon
              color={filterState == "Home" ? "black" : "gray"}
              handlChangeState={handlChangeState}
            />
            <LocationIcon
              handlChangeState={handlChangeState}
              color={filterState == "Location" ? "black" : "gray"}
            />
            <HeartIcon
              handlChangeState={handlChangeState}
              color={filterState == "Heart" ? "black" : "gray"}
            />
            <UserIcon
              handlChangeState={handlChangeState}
              color={filterState == "User" ? "black" : "gray"}
            />
          </div>
        </div>
      )}
      {isLoading === true && <Loader />}
    </div>
  );
};
export default Day;
