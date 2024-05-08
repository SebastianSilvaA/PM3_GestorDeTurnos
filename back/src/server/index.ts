

import { PORT } from "../config/envs"
import server from "./server"


export function serverInit() {
    server.listen(PORT, ()=> {
        console.log(`Server is listening on PORT ${PORT}`)
    })
}
