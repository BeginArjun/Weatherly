import { BsDropletFill} from "react-icons/bs";
const ForecastCard=(props)=>{
    return (
        <div className="flex flex-col w-40 h-[80%] text-black justify-center items-center gap-2 overflow-hidden border-r-8 border-yellow-300">
            <p className="text-xl">{props.time}</p>
            <p className="text-blue-700 text-2xl font-extrabold font-sans">{props.temp}&#8451;</p>
            <div className="text-3xl text-[#ffd700]">
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