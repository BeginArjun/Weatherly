import './Header.css';
import Search from './Search/Search';
import Unit from './Unit/Unit';
const Header=()=>{
    return(
        <nav className="header flex flex-row w-screen h-[82px] justify-around items-center">
            <p className="text-white text-2xl tracking-widest font-bold font-stroke p-3 text-center font-Monsterrat">Athena</p>
            <div className='flex flex-row justify-center items-center gap-2'>
                <Search/>
                <Unit/>
            </div>
        </nav>
    )
}
export default Header;