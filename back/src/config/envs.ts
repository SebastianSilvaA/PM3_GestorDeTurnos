import dotenv from "dotenv"
dotenv.config({ path: "./src/config/.env" });


const PORT = Number(process.env.PORT)
export const DB_TYPE = process.env.DB_TYPE
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = Number(process.env.DB_PORT)
export const DB_USERNAME = process.env.DB_USERNAME
export const DB_PASSWORD =process.env.DB_PASSWORD
export const DB = process.env.DB

export { PORT}



