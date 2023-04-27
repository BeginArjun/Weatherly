import { useState,useEffect } from "react";
import { FaRedo} from "react-icons/fa";
import { useApi } from "../Context/Api";
const Card=()=>{
    const [date,setDate]=useState(Date().toLocaleString().split(' ').slice(4,6))
    const [isRefreshed,setIsRefreshed]=useState(false)
    useEffect(()=>{
        setDate(Date().toLocaleString().split(' ').slice(4,5))
        if(isRefreshed){
            setIsRefreshed(false)
        }
    },[isRefreshed])
    const handleChange=()=>{
        setIsRefreshed(!isRefreshed)
    }
    const {data}=useApi()
    if(!data){
        return (
            <p>Loading...</p>
        )
    }
    const src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    return (
        <div className="flex flex-col justify-start items-center bg-gradient-to-r from-[#0000f9] to-[#0fadcd] w-[350px] h-44 mt-4 mx-3 rounded-lg shadow-xl font-roboto md:w-[500px]">
            <div className="text-white text-left text-2xl bg-[#4e4a4a] w-full h-auto p-2 rounded-t-lg flex flex-row relative top-0 justify-between items-center gap-2">
                <p>{data.name}<span className="text-lg"> As of {date}</span></p>
                <div className="text-sm hover:animate-spin">
                    <FaRedo onClick={handleChange}/>
                </div>
            </div>
            <div className="text-left  text-white text-xl w-full h-max flex flex-row justify-between items-start">
                <div className="flex flex-col w-1/2 p-2 text-sm">
                <p className="text-3xl font-extrabold font-sans">{Math.round(data.main.temp)} &#8451;</p>
                <p>{data.weather[0].main}</p>
                <p>Max {data.main.temp_max}&#8451; Min {data.main.temp_min}&#8451;</p>
                </div>
                <div className="m-2">
                    <img src={src} alt={data.weather[0].description}/>
                </div>
            </div>
        </div>
    )
}
export default Card;