import { useContext,createContext,useState,useEffect } from "react";
export const CoordsContext=createContext()

export const useLocation=()=>{
    const [location,setLocation]=useState({
        lat:0,
        long:0
    })
    useEffect(()=>{
            try{
                navigator.geolocation.getCurrentPosition(function(position){
                    setLocation({
                        lat:position.coords.latitude,
                        long:position.coords.longitude
                    })
                })
            }
            catch(err){
                console.log("Cannot Get Geolocation. Allow Location Access!")
            }
    },[])
    
    const updateLocation=(lt,lon)=>{
        setLocation({
            lat:lt,
            long:lon}
            )
    }

    return [location,updateLocation]
}

export const Coords=(props)=>{
    const [location,setLocation]=useLocation()
    return(
        <CoordsContext.Provider value={[location,setLocation]}>
            {props.children}
        </CoordsContext.Provider>
    )
}

export const useCoords=()=>{
    const context=useContext(CoordsContext)
    return context
}