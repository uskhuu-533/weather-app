import Circels from "./components/Circle-Logo";
import Day from "./components/Day";
import Night from "./components/Night";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [selectedCity, SetSelctedCity] = useState("Ulaanbaator, Mongolia");
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-400 overflow-hidden relative">
        <Circels />
        <div className="w-full h-full rounded-3xl flex bg-neatral-100 overflow-hidden ">
          <Day selectedCity={selectedCity} />
          <Night selectedCity={selectedCity}/>
          <SearchBar selectedCity={selectedCity} SetSelctedCity={SetSelctedCity} />
        </div>
      </div>
    </>
  );
}

export default App;
