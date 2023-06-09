import { FiSearch } from "react-icons/fi";
import { useCoords } from "../../Context/Coords";
import { useState} from "react";
import { useApi } from "../../Context/Api";
import './Search.css'
const Search = () => {
    const {data}=useApi()
    const [location, setLocation] = useCoords();
    const [inputVal,setInputVal]=useState("Current Location")
    console.log("Input Value: ",inputVal)
    const changeLocation=async (e)=>{
        e.preventDefault()
        const apikey=process.env.REACT_APP_API_KEY
        const fetchLocation=async()=>{
            console.log(inputVal)
            let apiData=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${inputVal}&appid=${apikey}`)
            const data=await apiData.json()
            setLocation(data[0].lat,data[0].lon,()=>console.log("Location Changed"))
        }
        if(inputVal!==undefined || inputVal!=="" || inputVal!=="Current Location"){
        await fetchLocation()
        }
    }
    return(
        <div id="container">
            <form onSubmit={changeLocation} id="formContainer">
                <button type="submit" id="search"><FiSearch/></button>
                <input type="text" placeholder="Search a city ..." onChange={(e)=>setInputVal(e.target.value)} value={inputVal}name="search"/>
                </form>
        </div>
    )
}
export default Search;