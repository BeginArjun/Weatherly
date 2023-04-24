import Card from '../../components/Card'
import Forecast from '../../components/Forecast'
import InfoCard from '../../components/InfoCard'
const Layout=()=>{
    return(
        <div>
            <div className='flex flex-col gap-2 lg:flex-row'>
            <Card/>
            <InfoCard/>
            </div>
            <Forecast/>
        </div>
    )
}
export default Layout