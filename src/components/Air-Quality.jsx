import { useEffect, useState } from "react";
const AirQuality = (props) => {
  const [pm2_5Color, setPM25] = useState({});
  const [no2color, setNO2Index] = useState({})
  const [so2index, setso2Index] = useState({})
  const [pm10index, setpm10Index] = useState({});
  const [o3index, seto3Index] = useState({})
  const { airQuality } = props;
  const CO = airQuality.co;
  const no2 = airQuality.no2;
  const o3 = airQuality.o3;
  const pm2_5 = airQuality.pm2_5;
  const gb_defra_index = airQuality["gb-defra-index"];
  const us_epa_index = airQuality["us-epa-index"];
  const so2 = airQuality.so2;
  const pm10 = airQuality.pm10;
  console.log(airQuality);
  
  const changeColor = () => {
  if (pm2_5 <= 12 && pm2_5 >= 0) {
   setPM25 ({color:"gradient-to-bl from-green-600 to-green-300", text:"Good"});
  } 
  else if (pm2_5 <= 35 && pm2_5 > 12) {
    setPM25({color:"gradient-to-bl from-lime-500 to-amber-300", text:"Moderate"});
  } 
  else if (pm2_5 <= 55 && pm2_5 > 35) {
    setPM25({color:"gradient-to-bl from-orange-600 to-yellow-400", text:"Unhealthy"});
  }
   else if (pm2_5 <= 150 && pm2_5 > 55) {
    setPM25({color:"gradient-to-bl from-red-600 to-orange-500", text:"Unhealthy"});
  }
   else if (pm2_5 <= 250 && pm2_5 > 150) {
    setPM25({color:"gradient-to-bl from-red-600 to-orange-500", text:"Unhealthy"});
  }
   else if (pm2_5 >= 250) {
    setPM25({color:"gradient-to-bl from-red-600 to-purple-900", text:"Hazardous"});
  }



  if (no2 <= 12 && no2 >= 0) {
    setNO2Index ({color:"gradient-to-bl from-green-600 to-green-300", text:"Good"});
   } 
   else if (no2 <= 35 && no2 > 12) {
     setNO2Index({color:"gradient-to-bl from-lime-500 to-amber-300", text:"Moderate"});
   } 
   else if (no2 <= 55 && no2 > 35) {
     setNO2Index({color:"gradient-to-bl from-orange-600 to-yellow-400", text:"Unhealthy"});
   }
    else if (no2 <= 150 && no2 > 55) {
     setNO2Index({color:"from-red-600 to-orange-500", text:"Unhealthy"});
   }
    else if (no2 <= 250 && no2 > 150) {
     setNO2Index({color:"gradient-to-bl from-red-600 to-orange-500", text:"Unhealthy"});
   }
    else if (no2 >= 250) {
     setNO2Index({color:"gradient-to-bl from-red-600 to-purple-900", text:"Hazardous"});
   }


   if (so2 <= 12 && so2 >= 0) {
    setso2Index ({color:"gradient-to-bl from-green-600 to-green-300", text:"Good"});
   } 
   else if (so2 <= 35 && so2 > 12) {
     setso2Index({color:"gradient-to-bl from-lime-500 to-amber-300", text:"Moderate"});
   } 
   else if (so2 <= 55 && so2 > 35) {
     setso2Index({color:"gradient-to-bl from-orange-600 to-yellow-400", text:"Unhealthy"});
   }
    else if (so2 <= 150 && so2 > 55) {
     setso2Index({color:"gradient-to-bl from-red-600 to-orange-500", text:"Unhealthy"});
   }
    else if (so2 <= 250 && so2 > 150) {
     setso2Index({color:"gradient-to-bl from-red-600 to-orange-500", text:"Unhealthy"});
   }
    else if (so2 >= 250) {
     setso2Index({color:"gradient-to-bl from-red-600 to-purple-900", text:"Hazardous"});
   }


   if (pm10 <= 12 && pm10 >= 0) {
    setpm10Index ({color:"gradient-to-bl from-green-600 to-green-300", text:"Good"});
   } 
   else if (pm10 <= 35 && pm10 > 12) {
     setpm10Index({color:"gradient-to-bl from-lime-500 to-amber-300", text:"Moderate"});
   } 
   else if (pm10 <= 55 && pm10 > 35) {
     setpm10Index({color:"gradient-to-bl from-orange-600 to-yellow-400", text:"Unhealthy"});
   }
    else if (pm10 <= 150 && pm10 > 55) {
     setpm10Index({color:"gradient-to-bl from-red-600 to-orange-500", text:"Unhealthy"});
   }
    else if (pm10 <= 250 && pm10 > 150) {
     setpm10Index({color:"gradient-to-bl from-red-600 to-orange-500", text:"Unhealthy"});
   }
    else if (pm10 >= 250) {
     setpm10Index({color:"gradient-to-bl from-red-600 to-purple-900", text:"Hazardous"});
   }

   if (o3 <= 12 && o3 >= 0) {
    seto3Index ({color:"gradient-to-bl from-green-600 to-green-300", text:"Good"});
   } 
   else if (o3 <= 35 && o3 > 12) {
     seto3Index({color:"gradient-to-bl from-lime-500 to-amber-300", text:"Moderate"});
   } 
   else if (o3 <= 55 && o3 > 35) {
     seto3Index({color:"gradient-to-bl from-orange-600 to-yellow-400", text:"Unhealthy"});
   }
    else if (o3 <= 150 && o3 > 55) {
     seto3Index({color:"gradient-to-bl from-red-600 to-orange-500", text:"Unhealthy"});
   }
    else if (o3 <= 250 && o3 > 150) {
     seto3Index({color:"gradient-to-bl from-red-600 to-orange-500", text:"Unhealthy"});
   }
    else if (o3 >= 250) {
     seto3Index({color:"gradient-to-bl from-red-600 to-purple-900", text:"Hazardous"});
   }

  }

  useEffect(()=>{
    changeColor()
  },[])
  return (
    <div className="grid grid-cols-2 w-full h-[90%] gap-2 p-5">
      <div
        className={`flex font-extra-bold flex-wrap justify-center items-center bg-gradient-to-r from-red-600 to-red-200 rounded-3xl`}
      >
        CO: {CO}
      </div>
      <div className={`flex font-extra-bold flex-wrap justify-center items-center bg-gradient-to-bl ${no2color.color} rounded-3xl flex-col `}>
        <p>NO2: {no2}</p> 
        <p>{no2color.text}</p>
      </div>
      <div
        className={`flex font-extra-bold flex-wrap justify-center bg-${pm2_5Color.color}  items-center rounded-3xl flex-col`}
      ><p>PM2.5: {pm2_5}</p>
      <p>{pm2_5Color.text}</p>
      </div>
      <div className={`flex font-extra-bold flex-wrap justify-center bg-${pm10index.color}  items-center rounded-3xl flex-col`}>
        <p>PM10: {pm10}</p>
        <p>{pm10index.text}</p>
      </div>
      <div className={`flex font-extra-bold flex-wrap justify-center items-center  bg-${so2index.color} rounded-3xl flex-col`}>
        <p>SO2: {so2} </p>
        <p>{so2index.text}</p>
      </div>
      <div className={`flex font-extra-bold flex-wrap justify-center bg-${pm2_5Color.color}  items-center rounded-3xl flex-col`}>
        gb-defra-index: {gb_defra_index}
      </div>
      <div className={`flex font-extra-bold flex-wrap justify-center bg-${o3index.color}  items-center rounded-3xl flex-col`}>
       <p>O3: {o3}</p>
       <p>{o3index.text}</p>
      </div>
      <div className={`flex font-extra-bold flex-wrap justify-center bg-${pm2_5Color.color}  items-center rounded-3xl flex-col`}>
        us-epa-index: {us_epa_index}
      </div>
    </div>
  );
};
export default AirQuality;
