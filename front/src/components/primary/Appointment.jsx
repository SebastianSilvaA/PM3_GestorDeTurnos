
import { useEffect, useState } from "react"


import Appointment from "../secondary/Appointment"
import { canceledAppointment, getAppointment, getUser } from "../../helpers/getAppointments"
import { useDispatch, useSelector } from "react-redux"
import { cancelAppointment, updateAppointment } from "../../redux/Slice"

export default function Appointments() {
    const appointments = useSelector((state) => state.userAppointments)
    
    
    

    console.log(appointments);
  

    
                

    return (
        
        <div>
        {appointments.length > 0 && appointments.map(function (appointmento) {


            

            
            return(
                <div>
        <Appointment  key={appointmento.id} date={appointmento.date} time={appointmento.time} status={appointmento.status} id={appointmento.id} />
        
                </div>
            ) 
        }) } 
    </div>
    )
    
    
}