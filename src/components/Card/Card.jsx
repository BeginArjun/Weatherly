import {useApi} from '../../Context/Api'
import moment from 'moment'
import './Card.css'
const Card=()=>{
    const {data}=useApi()
    if(!data){
        return (
            <div id="card-container">
                <p id="loader">LOADING...</p>
                </div>
        )
    }
    return(
        <div id="card-container">
                <div id="curr-details">
                <p className="date">{moment().format('D MMM h:mm A')}</p>
                <p className="temp">{Math.round(data.main.temp)}°C</p>
                <p id="curr-weather-feel">Feels Like {Math.round(data.main.feels_like)}</p>
                </div>
                <div id="curr-img">
                    <img src={`/assets/images/${data.weather[0].icon}.svg`} alt="weather-icon" width="100" height="100" id="curr-weather-icon"/>
                    <p id="curr-weather-desc">{data.weather[0].description}</p>
                </div>
        </div>
    )
}
export default Card