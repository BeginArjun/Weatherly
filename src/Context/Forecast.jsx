import { useContext,createContext,useState,useEffect } from "react";
import { useCoords } from "./Coords";
const ForecastContext = createContext();
export const Forecast=(props)=>{
    const apiKey = process.env.REACT_APP_API_KEY
    const [data,setData]=useState("No Data")
    const [location]=useCoords()
    const [units,setUnits]=useState("metric")

    useEffect(()=>{
        const fetchApi=async()=>{
            let result=await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.long}&appid=${apiKey}&units=${units}`
                )
            let apiData=await result.json()
            setData(apiData)
        }
        fetchApi()
        console.log("Forecast: ",data)
    },[location])
    return(
        <ForecastContext.Provider value={{data}}>
            {props.children}
        </ForecastContext.Provider>
    )
}

export const useForecast=()=>{
    const context=useContext(ForecastContext)
    return context
}
 
export const GetForecast = () => {
    const {data}=useForecast()
    // Get the current time in seconds
    const currentTime = Math.round(new Date().getTime() / 1000);

    // Calculate the requested date
    const requestedDate = new Date();
    requestedDate.setHours(requestedDate.getHours() + 24);

    // Filter the data to only include forecasts for the next 24 hours
    const filteredData = data.list.filter(forecast => {
      const forecastTime = forecast.dt;
      return forecastTime >= currentTime && forecastTime <= requestedDate.getTime() / 1000;
    }).map(forecast => {
        const date = new Date(forecast.dt_txt);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const formattedTime = `${hours}:${minutes.substr(-2)} ${hours >= 12 ? 'PM' : 'AM'}`;
        return {...forecast, time: formattedTime};
    });

    return filteredData;
}