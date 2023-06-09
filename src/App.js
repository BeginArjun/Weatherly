import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { Api } from "./Context/Api";
import { Coords } from "./Context/Coords";
import { Forecast } from "./Context/Forecast";
import "./App.css";
import Footer from "./components/Footer/Footer";
const App=()=>{
  return(
    <div className="App">
    <Coords>
     <Api>
      <Header/>
      <Forecast>
      <Home/>
      </Forecast>
     </Api>
     </Coords>
     <Footer/>
     </div>
  )
}
export default App;