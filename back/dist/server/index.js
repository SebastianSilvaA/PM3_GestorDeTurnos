"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverInit = void 0;
const envs_1 = require("../config/envs");
const server_1 = __importDefault(require("./server"));
function serverInit() {
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Server is listening on PORT ${envs_1.PORT}`);
    });
}
exports.serverInit = serverInit;
