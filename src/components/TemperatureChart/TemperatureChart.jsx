import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { GetForecast, useForecast } from '../../Context/Forecast';

const TemperatureChart = (props) => {
  const chartRef = useRef(null);
  let myChart=useRef(null)
  const { data } = useForecast();
      // Get the forecast data for the current date
      const forecastData = GetForecast();
  useEffect(() => {
    if (chartRef.current) {

      // Extract the temperature and time data from the forecast
      const temperatureData = forecastData.map(forecast => forecast.main.temp);
      const timeData = forecastData.map(forecast => new Date(forecast.dt * 1000).toLocaleTimeString());


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
            label: 'Temperature',
            data: temperatureData,
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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <canvas ref={chartRef} style={{paddingBottom:60}}></canvas>
    </div>
  );
}

export default TemperatureChart;