import ForecastCard from "./ForecastCard"
import { useEffect,useState } from "react"
const Forecast=(props)=>{
    const currimg=`http://openweathermap.org/img/wn/${props.icon}@2x.png`
    const [data,setData]=useState([])
    const [isUpdated,setIsUpdated]=useState(false)
    const lat=props.lat
    const lon=props.lon
    const [foreData,setForeData]=useState([])
    const [element,setElement]=useState([])
    const apiKey='7d43ba9734370469b5589b2c43cc64c4'
    useEffect(()=>{
        console.log("Use Effect in forecast")
        const fetchData=async ()=>{
            let result=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=8&appid=${apiKey}`,{headers: {Accept: 'application/json'}})
            let apiData=await result.json()
            console.log("api Data")
            console.log(apiData)
            setData(apiData)
            setForeData(apiData.list)
            setIsUpdated(true)
            console.log("Data")
            console.log(data)
            console.log("foreData")
            console.log(foreData)
            setElement(()=>{
                return(
                    foreData.map((d)=>{
                        return(
                            <ForecastCard
                            temp={d.main.temp}
                            time={d.dt_txt.slice(11,16)}
                            weather={<img src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`} alt="weather-icon"/>} 
                            precipitation={`${d.main.humidity}%`}
                            key={Math.random()*8} 
                            />
                        )
                    })
                )
            })
    }
    fetchData()
    console.log(element)
    console.log("Updated Data")
    },[isUpdated])
    return(
        <div className="bg-white shadow-lg rounded-md w-[350px] lg:w-[95vw] md:w-[70vw] h-[20rem] m-2 p-2 font-roboto">
            <p className="text-2xl text-black text-center lg:text-left">24 Hour Forecast of {props.city}</p>
            <div className="flex flex-row w-full justify-start items-center overflow-x-scroll mt-2">
            {(element) && <div className="flex flex-row">
            <ForecastCard 
            time={(Date().toLocaleString().split(' ')[4].slice(0,2))+":00"}
            weather={<img src= {currimg} alt={props.currData.weather[0].main}/>}
            precipitation={(props.currData.main.humidity)+'%'}
            temp={props.currData.main.temp}
            />
            {element}
            </div>}
            </div>
        </div>
    )
}
export default Forecast