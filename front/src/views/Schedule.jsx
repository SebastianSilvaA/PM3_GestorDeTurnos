import { useState } from "react";
import validateAppointment from "./validate";
import { postSchedule } from "../helpers/getAppointments";

export default function Schedule() {
    const [appointment, setAppointment ] = useState({
        date: "",
        time: ""

    })

    const [errors, setErrors] = useState({
        date: "",
        time: ""
    })

    function handleChange(e) {
        const newAppointment = {...appointment, [e.target.name]: e.target.value}
        setAppointment(newAppointment)
        const validationErrors = validateAppointment(newAppointment)
        setErrors({...validationErrors})
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (Object.keys(errors).length === 0) {
            postSchedule(appointment).then(res => alert("Appointment creado"), setAppointment({
                date: "",
                time: ""
            })).catch(err => console.log(err))
            console.log(appointment)
        } else {
            alert("revisa hay erroes")
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="button"> Cancel</button>
            <button type="submit"> Create Appointment</button>
        </div>
        </form>
    )
        
}