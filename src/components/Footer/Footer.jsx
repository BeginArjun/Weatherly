import './Footer.css'
import { FaGithub } from 'react-icons/fa'
const Footer=()=>{ 
    return(
        <footer>
            <p id="header-logo">Weatherly</p>
            <p className='subtitle'>Created with {"<"}3 by Arjun Sharma</p>
            <div>
                <FaGithub/>
                <a href="https://github.com/BeginArjun/Weather-App" target="_blank"className='subtitle link'>Contribute</a>
            </div>
        </footer>
    )
 }

export default Footer