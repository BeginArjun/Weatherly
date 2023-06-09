import { useEffect } from "react"
import { GetForecast } from "../../Context/Forecast"
import { useCoords } from "../../Context/Coords"
import { useState } from "react"
import {FiDroplet} from 'react-icons/fi'
const Precipitation = () => {
    const forecast=GetForecast()
    const [location]=useCoords()
    const [preciData,setPreciData]=useState(forecast.map(forecast=>forecast.pop))
    const [element,setElement]=useState(<div>Loading</div>)
    const displayData=(pop,time)=>{
        return (
            <div style={{display:"flex",flexDirection:"column",height:"150px",gap:"20%",alignItems:"center"}}>
                <p>{Math.round(pop*100)}%</p>
                <FiDroplet/>
                <p>{time}</p>
            </div>
        )
    }
    useEffect(() => {
        setPreciData(forecast.map(forecast=>forecast.pop))
        const obj=forecast.map((data,index)=>{ return displayData(data.pop,data.time)})
        setElement(obj)
    },[location])
    console.log(preciData)
    return (
        <div className="container">
            <p className="container-title">Precipitation</p>
            <div style={{display:"flex",flexDirection:"row",gap:"5%",overflowX:"scroll",maxWidth:"100vw"}}>
            {element}
            </div>
        </div>
    )
}
export default Precipitation