import { useSelector } from "react-redux"
import Navbar from "../components/primary/Navbar"
import Schedule from "./Schedule";
import { useEffect } from "react";

 function Home() {
    const userId = useSelector((state) => state.userId)
    return (
    <div>
        <h1>home</h1>
        {userId !== 0 ? (
            <Schedule/>
        ) : (
            <p>debes estar logueado</p>
        )}
        
    </div>
    )
    

    
    
}


export default Home
