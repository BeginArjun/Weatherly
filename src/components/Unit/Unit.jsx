import {FiGlobe} from 'react-icons/fi';
import {FaAngleDown} from 'react-icons/fa';
import './Unit.css'
import { useEffect, useState} from 'react';
import { useApi } from '../../Context/Api';
const Unit=()=>{
    const {data}=useApi()
    const [show,setShow]=useState(false);
    const [unit,setUnit]=useState('℃');
    const [countryCode,setCountryCode]=useState("_ _");
    useEffect(()=>{
        setCountryCode(data.sys.country)
    },[data])
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUnit(e.target.innerText);
    }
    const showDropdown=()=>{
        setShow(!show);
    }
    if(!data || !data.sys){
        return (
            <p>Loading...</p>
        )
    }
    return(
        <div className='flex flex-row justify-start items-center gap-2'>
            <FiGlobe className='text-2xl text-white'/>
            <div className='text-white text-sm flex flex-row gap-1'>
                <p>{countryCode}</p>
                {unit}
            </div>
            <div className="dropdown">
                <FaAngleDown className='text-white text-2xl cursor-pointer dropbtn' onClick={showDropdown}/>
                <div className="dropdown-content">
                    <p onClick={handleSubmit}>℃</p>
                    <p onClick={handleSubmit}>℉</p>
                </div>
            </div>
        </div>
    )
}
export default Unit;