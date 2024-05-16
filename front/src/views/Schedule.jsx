import { useState } from "react";
import validateAppointment from "./validate";
import { postSchedule } from "../helpers/getAppointments";
import { useDispatch, useSelector } from "react-redux";
import { updateAppointment } from "../redux/Slice";
import "./schedule.css"
import { useNavigate } from "react-router-dom";

export default function Schedule() {
   const navigate = useNavigate()

    const dispatch = useDispatch()

    const userId = useSelector((state) => state.userId)
    console.log(userId);

    
    const [appointment, setAppointment ] = useState({
        date: "",
        time: "",
        status:"",
        userId: 0

    })
    console.log(appointment)

    const [errors, setErrors] = useState({
        date: "",
        time: ""
    })

    function handleChange(e) {
        const newAppointment = {...appointment, [e.target.name]: e.target.value, userId: userId}
        setAppointment(newAppointment)
        const validationErrors = validateAppointment(newAppointment)
        setErrors({...validationErrors})
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (Object.keys(errors).length === 0) {
            postSchedule(appointment).then((res ) => {
                alert("Appointment creado")
                const status = res.postTurn.status
                console.log(status)
                dispatch(updateAppointment([...res.postTurn.user.appointments, {time: res.postTurn.time, date: res.postTurn.date, status: res.postTurn.status, id: res.postTurn.id}]))
                 setAppointment({
                    date: "",
                    time: ""
                })
                
               
            }).catch((err )=> {
                console.log(err.response.data.error)
                if (err.response.data.error === "Se requiere un ID de usuario") { 
                    alert("Inicia Seion");
                    navigate("/login")

                } else if (err.response.data.error === 'La fecha no puede estar más de 5 meses en el futuro incorrecta') {
                    alert("Selecciona una fecha en un plazo de 5 meses");
                } else {
                    alert(err.response.data.error);
                }
        
            })
            console.log(appointment)
        } else {
            alert("revisa hay erroes")
        }
        
    }

    return (
        <form  className="form-container"onSubmit={handleSubmit}>
        <label >
            Date:
            <input
            type="date"
            value={appointment.date}
            name="date"
            onChange={handleChange}
            
             />
             <p>{errors.date}</p>
        </label>
        <label>
            Time: 
            <input type="time"
            value={appointment.time}
            name="time"
            onChange={handleChange} />
            <p>{errors.time}</p>
        </label>
        <div>
            <button className="cancel-button" type="button"> Cancel</button>
            <button className="submit-button" type="submit"> Create Appointment</button>
        </div>
        </form>
    )
        
}