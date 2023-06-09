import './Header.css'
import Search from '../Search/Search'
import Tabs from '../Tabs/Tabs'
const Header=()=>{
    return (
        
        <header>
                <div>
                <p id="header-logo">Weatherly</p>
                <Search/>
                </div>
                <Tabs/>
        </header>
    )
}
export default Header