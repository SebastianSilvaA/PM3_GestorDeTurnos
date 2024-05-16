import "axios"
import axios from "axios"

export async function  getAppointment () {
    try {
        const response = await axios.get("http://localhost:3000/appointment")
        return response.data
       
    } catch (error) {
        throw new Error (error)
        
    }
    

}

 async function postSchedule (appointment) {
    console.log(appointment);
      const response = await axios.post("http://localhost:3000/appointment/schedule", appointment)
      return response.data
}





async function postUserRegister(user) {
    const response = await axios.post("http://localhost:3000/users/register", user)

    return response.data
}

async function postUserLogin(user) {
    const response = await axios.post("http://localhost:3000/users/login", user)
    return response
}


async function canceledAppointment(id) {
    const response = await axios.put(`http://localhost:3000/appointment/cancel/${id}`)
    return response.data
}

async function getUser(id) {
    const response = await axios.get(`http://localhost:3000/users/${id}`)
    return response
}

export {postSchedule, postUserRegister, postUserLogin, canceledAppointment, getUser}


