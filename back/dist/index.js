"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const config_1 = require("./config");
const server_1 = require("./server");
config_1.AppDataSource.initialize()
    .then(() => {
    console.log("database connected");
    (0, server_1.serverInit)();
})
    .catch((err) => {
    console.error(err);
});
