import Home from "./views/home"
import "./App.css"
import Navbar from "./components/primary/Navbar"
import Misturnos from "./views/Misturnos"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import Schedule from "./views/Schedule"

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
       {/* <Misturnos/>
       <Schedule/> 
      <Register/> */}
      <Login/>
     
      
    </div>
    )
  }
  
 


export default App
