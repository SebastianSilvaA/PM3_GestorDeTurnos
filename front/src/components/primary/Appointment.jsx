
import { useEffect, useState } from "react"

import Appointment from "../secondary/Appointment"
import { getAppointment } from "../../helpers/getAppointments"

export default function Appointments() {
    const [Appointments, setAppointment] = useState([])

   

    useEffect(() => {
        getAppointment().then((res) => setAppointment(res)).catch((error)=> console.error(error))
        
    }, [])

    return (
        <div>
        {Appointments.length > 0 && Appointments.map(function (appointmento) {
            
            return <Appointment key={appointmento.id} date={appointmento.date} time={appointmento.time} />
        }) } 
    </div>
    )
    
    
}