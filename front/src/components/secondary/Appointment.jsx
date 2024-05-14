 import "./appointments.css"

 export default function Appointment (appointmento) {
    
    return (<div className="appointments" ><h2>{appointmento.date}</h2> <p>{appointmento.time}</p>
     </div>)
}