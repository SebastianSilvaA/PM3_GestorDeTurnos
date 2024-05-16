import { useState } from "react";
import validateAppointment from "./validate";
import { postSchedule } from "../helpers/getAppointments";
import { useDispatch, useSelector } from "react-redux";
import { updateAppointment } from "../redux/Slice";
import "./schedule.css"

export default function Schedule() {

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
                
               
            }).catch(err => console.log(err))
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