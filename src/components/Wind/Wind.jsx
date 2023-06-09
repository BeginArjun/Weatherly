import {useRef,useEffect} from 'react';
import Chart from 'chart.js/auto';
import { GetForecast, useForecast } from '../../Context/Forecast';
import { useApi } from '../../Context/Api';
import {FiNavigation2} from 'react-icons/fi'
import './Wind.css'
const Wind=()=>{
        const chartRef = useRef(null);
        let myChart=useRef(null)
        const { data } = useApi()
            // Get the forecast data for the current date
            const forecastData = GetForecast();
        useEffect(() => {
          if (chartRef.current) {
      
            // Extract the temperature and time data from the forecast
            const windData = forecastData.map(forecast => forecast.wind.speed);
            console.log(windData)
            const timeData = forecastData.map(forecast => new Date(forecast.dt * 1000).toLocaleTimeString());
            const windDirData=forecastData.map(forecast=>forecast.wind.deg)
      
      
            //Destroy existing chart if it exists
            if(myChart.current){
              myChart.current.destroy()
            }
            // Create a new Chart.js chart
            myChart.current=new Chart(chartRef.current, {
              type: 'bar',
              data: {
                labels: timeData,
                datasets: [{
                  label: 'Wind',
                  data: windData,
                  backgroundColor: '#2885CC',
                }]
              },
              options: {
                responsive: true
            }
            });
          }
        }, [forecastData]);
      
        return (
            <div className="container">
                <p className="container-title">Wind</p>
                <div className='curr-wind-contain'>
                <p className='wind-curr'>{data.wind.speed}</p>
                <div className='wind-deg'>
                    <div style={{transformOrigin:"0 0",transform:`rotate(${data.wind.deg}deg)`}}>
                    <FiNavigation2/>
                    </div>
                    <p>m/s</p>
                </div>
                </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <canvas ref={chartRef} style={{paddingBottom:60}}></canvas>
          </div>
          </div>
        );
}
export default Wind;    