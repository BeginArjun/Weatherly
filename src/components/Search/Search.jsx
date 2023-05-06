import { FiSearch } from "react-icons/fi";
import { useCoords } from "../../Context/Coords";
import { useState} from "react";
import './Search.css'
const Search = () => {
    const [location, setLocation] = useCoords();
    const [inputVal,setInputVal]=useState()
    console.log("Input Value: ",inputVal)
    const changeLocation=async (e)=>{
        e.preventDefault()
        const apikey=process.env.REACT_APP_API_KEY
        const fetchLocation=async()=>{
            console.log(inputVal)
            let apiData=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputVal}&appid=${apikey}`)
            const data=await apiData.json()
            setLocation(data[0].lat,data[0].lon,()=>console.log("Location Changed"))
        }
        if(inputVal!==undefined || inputVal!==""){
        await fetchLocation()
        }
    }
    return(
        <div id="container">
            <form onSubmit={changeLocation} id="formContainer">
                <input type="text" placeholder="Search a city ..." onChange={(e)=>setInputVal(e.target.value)} name="search"/>
                <button type="submit"><FiSearch/></button>
                </form>
        </div>
    )
}
export default Search;