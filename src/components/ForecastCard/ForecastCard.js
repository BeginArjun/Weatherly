import TemperatureChart from "../TemperatureChart/TemperatureChart";

const ForecastCard = (props) => {
    return (
        <div>
            <p>Hourly Forecast</p>
            <TemperatureChart day={props.day} />
        </div>
    )
}
export default ForecastCard;