import Header from "./components/Header";
import Layout from "./Pages/Layout/Layout";
import { Api } from "./Context/Api";
const App=()=>{
  return(
     <Api>
      <Header/>
      <Layout/>
     </Api>
  )
}
export default App;