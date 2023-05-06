import Header from "./components/Header/Header";
import { Api } from "./Context/Api";
import { Coords } from "./Context/Coords";
const App=()=>{
  return(
    <Coords>
     <Api>
      <Header/>
     </Api>
     </Coords>
  )
}
export default App;