import "./nav.css";
import ProfileButton from "../secondary/Profilebutton";
import Searchbar from "../secondary/Serachbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const userId = useSelector((state) => state.userId);

 
  const navButtons = [
    { text: "Home", link: "/", visible: true },
    { text: "Login", link: "/login", visible: userId === 0 },
    { text: "Register", link: "/register", visible: userId === 0 },
    { text: "Turnos", link: "/appointment", visible: userId !== 0 },
    {text: "Agendar turno", link: "/appointments", visible: userId !== 0 }
    
  ];

  return (
    <div className="Nav_bar">
      <div className="logo">
        <img src="../images/donaslogo.jpg" alt="MundoDonas logo" />
      </div>
      <div className="Nav_bar_buttons">
        
        {navButtons.map((button, index) => (
          button.visible && (
            <Link to={button.link} className="Nav_button" key={index}>
              {button.text}
            </Link>
          )
        ))}
      </div>
      <div className="Searchbar">
        <Searchbar />
      </div>
      <div>
        
        <ProfileButton />
      </div>
    </div>
  );
}

export default Navbar;