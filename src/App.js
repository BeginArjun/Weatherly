import Header from "./components/Header";
import Card from './components/Card';
import Forecast from "./components/Forecast";
import InfoCard from "./components/InfoCard";
import { useEffect,useState } from "react";
const App=()=>{
  const apiKey='7d43ba9734370469b5589b2c43cc64c4'
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [dataUpdated,setDataUpdates]=useState(false)

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      let result=await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`)
      let apiData=await result.json()
      setData(apiData)   
      setDataUpdates(true)
      console.log(apiData)
     }
    fetchData();
   },[lat,long,dataUpdated])
  return(
    <div className="flex flex-col justify-center items-center  bg-[#f1faee] lg:items-start">
      <Header />
      {(data.main) && <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start">
          <Card weatherData={data}/>
          <InfoCard feelsLike={Math.round(data.main.feels_like)}
          max={data.main.temp_max}
          min={data.main.temp_min}
          humidity={data.main.humidity}
          visibility={data.visibility}
          wind={data.wind.speed}
          pressure={data.main.pressure}
          city={data.name}
          />
        </div>
        <Forecast 
        city={data.name}
        currData={data}
        icon={data.weather[0].icon}
        lat={lat}
        lon={long}
        />
        </div>}
    </div>
  )
}
export default App;