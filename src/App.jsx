import Circels from "./components/CircelLogo";
import Day from "./components/Day";
import Night from "./components/Night";
import SearchBar from "./components/SearchBar";
function App() {
  
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-400">
        <Circels />
        <div className="w-full h-full rounded-3xl flex bg-neatral-100">
        
          <Day />
          <Night />
        </div>
      </div>
    </>
  );
}

export default App;
