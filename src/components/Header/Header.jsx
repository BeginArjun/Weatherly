import './Header.css'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
const Header=()=>{
    return (
        
        <header>
            <nav>
                <Logo/>
                <ul>
                    <li><Search/></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header