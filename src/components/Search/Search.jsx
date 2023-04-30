import { FiSearch } from "react-icons/fi";
import { useCoords } from "../../Context/Coords";
import { useState} from "react";

const Search = () => {
    const [location, setLocation] = useCoords();
    const [inputVal,setInputVal]=useState()
    console.log("Input Value: ",inputVal)
    const changeLocation=async (e)=>{
        e.preventDefault()
        const apikey='7d43ba9734370469b5589b2c43cc64c4'
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
        <div className="flex flex-row border-black border-2 bg-white justify-around items-center rounded-full overflow-hidden p-2 w-[400px] lg:h-[43px]">
            <form className="w-full" onSubmit={changeLocation}>
            <input type="text" name="location" placeholder="Search City or Postal Code" className="focus:outline-none w-full text-center text-sm font-Monsterrat text-[#878181]" 
            value={inputVal}
            onChange={e=>setInputVal(e.target.value)}/>
            </form>
            <FiSearch className="text-2xl cursor-pointer"/>
        </div>
    )
}
export default Search;