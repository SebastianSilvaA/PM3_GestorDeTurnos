import { useEffect } from "react";
import "./homes.css";

function Home() {
    return (
        <div className="nuestroProductos">
            <h1>Nuestros productos</h1>
            <div className="donasContainer">
                <div className="card">
                    <img src="./images/bolitas.jpg" alt="bolitas" />
                    <h2>Bolitas</h2>
                </div>
                <div className="card">
                    <img src="./images/Chocodona.jpg" alt="choco dona" />
                    <h2>Choco Dona</h2>
                </div>
                <div className="card">
                    <img src="./images/donaazul.jpg" alt="dona azul" />
                    <h2>Dona Azul</h2>
                </div>
                <div className="card">
                    <img src="./images/donachocolate.jpg" alt="dona de chocolate" />
                    <h2>Dona de Chocolate</h2>
                </div>
                <div className="card">
                    <img src="./images/donamani.jpg" alt="dona de mani" />
                    <h2>Dona de Maní</h2>
                </div>
                <div className="card">
                    <img src="./images/donarosa.jpg" alt="dona rosada" />
                    <h2>Dona Rosada</h2>
                </div>
                <div className="card">
                    <img src="./images/dulcedeleche.jpg" alt="dona de dulce de leche" />
                    <h2>Dona de Dulce de Leche</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
