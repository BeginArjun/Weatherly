import { BsDropletFill} from "react-icons/bs";
const ForecastCard=(props)=>{
    return (
        <div className="flex flex-col w-40 h-[90%] text-white justify-center items-center gap-2 overflow-hidden bg-gradient-to-r from-[#0000f9] to-[#0fadcd] rounded-md shadow-2xl">
            <p className="text-xl">{props.time}</p>
            <p className="text-[#ffd700] text-2xl font-extrabold font-sans">{props.temp}&#8451;</p>
            <div className="text-3xl">
                {props.weather}
            </div>
            <div className="text-xl font-bold flex flex-row justify-center items-center">
            <BsDropletFill  color="rgb(29 78 216)"/>
            <p>{props.precipitation}</p>
            </div>
        </div>
    )
}
export default ForecastCard