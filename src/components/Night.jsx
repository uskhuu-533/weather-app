import LocationIcon from "./Location-icon";
import HomeIcon from "./Home-Icon";
import HeartIcon from "./Heart-Icon";
import UserIcon from "./User-Icon";
import { useState, useEffect } from "react";
import Conditions from "./condition";
const Night = (props) => {
  const { selectedCity } = props;
  const [temp, setDayTemp] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "f9703c47bec948389f382511251501";
  const getWeather = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${selectedCity}`
      );
      const result = await response.json();
      setIsLoading(false);
      const temprature = result.forecast.forecastday[0].hour[0].temp_c;
      const condition = result.forecast.forecastday[0].hour[0].condition.text;
      const conditionCode =
        result.forecast.forecastday[0].hour[0].condition.code;
      for (let i = 0; i < Conditions.length; i++) {
        if (Conditions[i].code === conditionCode) {
          setIcon(Conditions[i].iconNight);
        }
      }
      setDayTemp(temprature);
      setCondition(condition);
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
      {isLoading == false && (
        <div className="w-1/2 h-3/4 backdrop-blur-md bg-bg-slate/75 shadow-xl backdrop-blur-[2px] rounded-3xl flex flex-col items-center gap-6">
          <div className="flex justify-between py-12 w-9/12 ">
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
          </div>
          <div className="w-9/12 flex justify-between">
            <HomeIcon color="white" />
            <LocationIcon />
            <HeartIcon />
            <UserIcon />
          </div>
        </div>
      )}
      {isLoading == true && (
        <div
          role="status"
          className="flex items-center justify-center w-1/2 h-3/4 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-300"
        >
          <button disabled type="button">
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-10 h-10 me-3 text-gray-200 animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="gray"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
export default Night;
