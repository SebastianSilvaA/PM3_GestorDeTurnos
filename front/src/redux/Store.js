import {configureStore} from "@reduxjs/toolkit"

import  cafeSlice from "./Slice"

const store = configureStore({
    reducer:  cafeSlice,
    devTools: true
})


export default store