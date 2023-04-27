import { useContext, createContext, useState, useEffect } from "react";
const ApiContext = createContext();
export const Api = (props) => {
  const apiKey = "7d43ba9734370469b5589b2c43cc64c4";
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
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

    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      fetchData(position.coords.latitude, position.coords.longitude);
    });
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