import { DataSource } from "typeorm";
import { DB, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { User } from "../entities/user";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB,
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
})