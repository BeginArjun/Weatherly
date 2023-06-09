import { useApi } from "../../Context/Api";
import './InfoCard.css'
const InfoCard=()=>{
    const {data}=useApi()
    return(
        <div className="container">
            <p className="container-title">Current Weather</p>
            <div className="info-card">
                <p className="label">Humidity</p>
                <p>{data.main.humidity}%</p>
                <p className="label">Pressure</p>
                <p>{data.main.pressure}hPa</p>
                <p className="label">Visibility</p>
                <p>{data.visibility/1000}km</p>
                <p className="label">Clouds</p>
                <p >{data.clouds.all}%</p>
                <p className="label">Wind</p>
                <p>{data.wind.speed}m/sec</p>
            </div>
        </div>
    )
}
export default InfoCard;