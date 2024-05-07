import dotenv from "dotenv"
dotenv.config({ path: "./src/config/.env" });
console.log(process.env.PORT)

export const PORT = process.env.PORT