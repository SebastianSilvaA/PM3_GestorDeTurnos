import "./nav.css"
import ProfileButton from "../secondary/Profilebutton"
import Searchbar from "../secondary/Serachbar"


function Navbar() {
    return (
        
        <div className="Nav_bar">
            <div className="logo">
            <img src="../images/donaslogo.jpg" alt="MundoDonas logo" />
            </div>
            
        
        <div className="Nav_bar_buttons">
         <a href="#" className="Nav_button">Home</a>
         <a href="#" className="Nav_button">Contactanos</a>
         <a href="#" className="Nav_button">Sobre nosotros</a>
        </div>

        <div className="Searchbar">
            <Searchbar/>
        </div>
        <div>
            <ProfileButton/>
        </div>
        </div>

        
    )
}


export default Navbar