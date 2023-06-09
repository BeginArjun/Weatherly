import Card from '../../components/Card/Card'
import './Home.css'
import { useEffect,useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {FiChevronsDown} from 'react-icons/fi'
import ForecastCard from '../../components/ForecastCard/ForecastCard'
import InfoCard from '../../components/InfoCard/InfoCard'
import Precipitation from '../../components/Precipitation/Precipitation'
import Wind from '../../components/Wind/Wind'
const Home=()=>{
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <p>Loading</p>
    }
    return(
        <main id="homepage">
            <div id="intro"> 
            <Parallax pages={2} style={{width:"100vw",height:"100%",paddingBottom:20,'&::WebkitScrollbar': { width: 0, height: 0 } }}>
                <ParallaxLayer offset={0} speed={2.5}>
                    <Card/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}>
                <ForecastCard day={0}/>
                </ParallaxLayer>
            </Parallax>               
                <div id="scroll-down">
                <FiChevronsDown/>
                </div>
            </div>
            <InfoCard/>
            <Precipitation/>
            <Wind/>
        </main>
    )
}
export default Home