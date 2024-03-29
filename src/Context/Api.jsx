import { useContext, createContext, useState, useEffect } from "react";
import { useCoords } from "./Coords";
const ApiContext = createContext();
export const Api = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY
  const [location,setLocation]=useCoords()
  console.log("Location: ",location)
  const [data, setData] = useState(undefined);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchData = async (lat, long) => {
      let result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${location.lat}&lon=${location.long}&units=${units}&APPID=${apiKey}`
      );
      let apiData = await result.json();
      setData(apiData);
      console.log(apiData);
    };
    fetchData();
  }, [location]);

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