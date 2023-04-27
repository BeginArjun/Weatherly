import { FaWind,
    FaEye,
    FaTint,
    FaCompressArrowsAlt
} from "react-icons/fa";
import { useApi } from "../Context/Api";
const InfoCard=()=>{
    const {data}=useApi()
    if(!data){
        return (
            <p>Loading...</p>
        )
    }
    return(
        <div className="flex flex-col justify-start items-center bg-white w-[350px] h-[300px] rounded-md shadow-md m-3 text-[#2b2b2b] p-3">
            <p className="text-xl">Weather Today in {data.name}</p>
            <p className="text-3xl font-extrabold">{data.main.feels_like}&#8451;</p>
            <p>Feels Like</p>
            <div className="flex flex-row justify-between items-center p-2 w-full">
                <div className="flex flex-col text-xl justify-start items-start gap-3 w-1/2">
                    <p className="flex flex-row justify-start items-center gap-3"><FaTint />   Humidity</p>
                    <p className="flex flex-row justify-start items-center gap-3"><FaEye />    Visibility</p>
                    <p className="flex flex-row justify-start items-center gap-3"><FaWind />   Wind</p>
                    <p className="flex flex-row justify-start items-center gap-3"><FaCompressArrowsAlt />  Pressure</p>
                </div>
                <div className="flex flex-col text-xl justify-center items-end gap-3 w-1/2">
                    <p className="flex flex-row justify-start items-center gap-3">{data.main.humidity}%</p>
                    <p className="flex flex-row justify-start items-center gap-3">{data.visibility}m</p>
                    <p className="flex flex-row justify-start items-center gap-3">{data.wind.speed} m/s</p>
                    <p className="flex flex-row justify-start items-center gap-3">{data.main.pressure} hPa</p>
                </div>
            </div>
        </div>
    )
}
export default InfoCard