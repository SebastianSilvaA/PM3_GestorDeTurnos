
import { createSlice } from "@reduxjs/toolkit";


const initialState  = {
   userId:  0,
   userAppointments: []

}

const cafeSlice = createSlice({
    name: "cafe",
    initialState,
    reducers : {
        setUserId: (state, action) => {
            state.userId = action.payload
           
        },
        updateAppointment: (state, action) => {
            state.userAppointments = action.payload

        },
        cancelAppointment: (state, action) => {
             state.userAppointments = state.userAppointments
        },
        userLogout: (state) => {
            state.userId = 0
            state.userAppointments = []
        },
    },
})


export const {setUserId,updateAppointment, cancelAppointment, userLogout} = cafeSlice.actions;

export  default cafeSlice.reducer

