import SearchIcon from "./Search";
import { useEffect, useState } from "react";
import countriesData from "../Data";
import LocationIcon from "./Location-icon";
const SearchBar = (props) => {
  const { SetSelctedCity } = props;
  const [filteredData, SetData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);

  const OnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const getCountries = async () => {
   
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const result =await response.json();
      const data = []
      for (let i = 0; i < result.data.length; i++) {
        for (let j = 0; j < result.data[i].cities.length; j++) {
          const city = result.data[i].cities[j];
          data.push(city + ", " + result.data[i].country);          
        }
      }
      setCountries(data)
    } catch (error) {
      console.log(error);
    }
   
  
  };
  useEffect(() => {
    getCountries();
  }, []);
  const handleChangeCity = (city) => {
    SetSelctedCity(city);
  };
  useEffect(() => {
    if (searchValue == "") {
      SetData([]);
    } else {
      const filtered = countries.filter((el) =>
        el.toUpperCase().includes(searchValue.toUpperCase())
      );
      SetData(filtered);
    }
  }, [searchValue]);
  filteredData.length = 4;
  return (
    <div className="fixed mt-[10vh] ml-[15%] w-1/2 ">
      <div className="relative w-3/5 mt-[-70px] flex items-center">
        <SearchIcon />
        <input
          placeholder="Search"
          className="w-full py-4 pl-[12%] pr-[2%] outline-none text-[32px] font-bold rounded-full"
          value={searchValue}
          onChange={OnChange}
        />
      </div>
      {searchValue.length !== 0 ? (
        <div className="w-3/5 absolute bg-white/80 backdrop-blur-md mt-2 rounded-3xl overflow-hidden  ">
          {filteredData.map((el) => (
            <div
              key={el}
              className="w-full flex hover:bg-gray-100 gap-4 py-3 pl-4"
              onClick={() => handleChangeCity(el.toString())}
            >
              <LocationIcon />
              <p className="truncate font-bold text-2xl  ">{el} </p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default SearchBar;
