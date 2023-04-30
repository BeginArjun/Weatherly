import Header from "./components/Header";
import Layout from "./Pages/Layout/Layout";
import { Api } from "./Context/Api";
import { Coords } from "./Context/Coords";
const App=()=>{
  return(
    <Coords>
     <Api>
      <Header/>
      <Layout/>
     </Api>
     </Coords>
  )
}
export default App;