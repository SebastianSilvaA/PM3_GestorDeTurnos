import "reflect-metadata"
import { AppDataSource } from "./config"
import { serverInit } from "./server"


AppDataSource.initialize()

.then(() => {
    console.log("database connected")
    serverInit()
})
.catch((err) => {
    console.error(err)
})