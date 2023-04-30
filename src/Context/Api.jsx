import { useContext, createContext, useState, useEffect } from "react";
import { useCoords } from "./Coords";
const ApiContext = createContext();
export const Api = (props) => {
  const apiKey = "7d43ba9734370469b5589b2c43cc64c4";
  const [location,setLocation]=useCoords()
  console.log("Location: ",location)
  const [lat, setLat] = useState(location.lat?location.lat:0);
  const [long, setLong] = useState(location.long?location.long:0);
  const [data, setData] = useState(undefined);
  const [units, setUnits] = useState("metric");
  const [triggerUpdate, setTriggerUpdates] = useState(false);

  useEffect(() => {
    const fetchData = async (lat, long) => {
      let result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=${units}&APPID=${apiKey}`
      );
      let apiData = await result.json();
      setData(apiData);
      setTriggerUpdates(data===undefined)
      console.log(apiData);
    };
    if(location.lat && location.long){
      setLat(location.lat)
      setLong(location.long)
    }
    fetchData(lat, long);
  }, [triggerUpdate]);

  return (
    <ApiContext.Provider value={{data}}>
      {props.children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  return context;
};