import { useContext,createContext,useState,useEffect } from "react";
const ApiContext=createContext();
export const Api=(props)=>{
    const apiKey='7d43ba9734370469b5589b2c43cc64c4'
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [dataUpdated,setDataUpdates]=useState(false)

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      let result=await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`)
      let apiData=await result.json()
      setData(apiData)   
      setDataUpdates(true)
      console.log(apiData)
     }
    fetchData();
   },[lat,long,dataUpdated])

   return(
         <ApiContext.Provider value={{data,setData}}>
                {props.children}
            </ApiContext.Provider>
   )
}

export const useApi=()=>{
    const context=useContext(ApiContext)
    return context
}