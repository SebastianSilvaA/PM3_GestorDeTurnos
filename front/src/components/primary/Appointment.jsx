
import { useEffect, useState } from "react"


import Appointment from "../secondary/Appointment"
import { canceledAppointment, getAppointment, getUser } from "../../helpers/getAppointments"
import { useDispatch, useSelector } from "react-redux"
import { cancelAppointment, updateAppointment } from "../../redux/Slice"

import "./appointment.css"; 

export default function Appointments() {
    const appointments = useSelector((state) => state.userAppointments);
    const dispatch = useDispatch();
    
    console.log(appointments);
  
    return (
        <div className="appointments-container">
            {appointments.length > 0 && appointments.map(function (appointment) {
                return (
                    <div key={appointment.id} className="appointment-card">
                        <Appointment date={appointment.date} time={appointment.time} status={appointment.status} id={appointment.id} />
                    </div>
                ); 
            })}
        </div>
    );
}