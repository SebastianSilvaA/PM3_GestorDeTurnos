
import { useDispatch } from "react-redux"
import { canceledAppointment,getUser } from "../../helpers/getAppointments"
import "./appointments.css"
import { updateAppointment } from "../../redux/Slice"

 export default function Appointment (appointmento) {

   
 const dispatch = useDispatch()

 
 
   const handleAccept = () => {
      
                   
      canceledAppointment(appointmento.id).then((res) => {
          console.log(res)
        alert("Turno cancelado!") 
        const id = res.putStatus.user.id
        getUser(id).then((res) =>{
          console.log(res)
          dispatch(updateAppointment(res.data.appointments))
        })
      })
   }

 


   
    return (<div className="appointments" ><h2>{appointmento.date}</h2> <p>{appointmento.time}</p>
    <button onClick={handleAccept}>{appointmento.status}</button> </div>)
}