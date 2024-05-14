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
    const {userId} = appointment
      const response = await axios.post("http://localhost:3000/appointment/schedule", {...appointment, userId})
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

export {postSchedule, postUserRegister, postUserLogin}


