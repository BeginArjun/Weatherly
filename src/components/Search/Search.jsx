import { FiSearch } from "react-icons/fi";
const Search = () => {
    return(
        <div className="flex flex-row border-black border-2 bg-white justify-around items-center rounded-full overflow-hidden p-2 w-[400px] lg:h-[43px]">
            <form className="w-full">
            <input type="text" name="location" placeholder="Search City or Postal Code" className="focus:outline-none w-full text-center text-sm font-Monsterrat text-[#878181]"/>
            </form>
            <FiSearch className="text-2xl cursor-pointer"/>
        </div>
    )
}
export default Search;