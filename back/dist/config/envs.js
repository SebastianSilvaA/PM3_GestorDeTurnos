"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DB = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_PORT = exports.DB_HOST = exports.DB_TYPE = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./src/config/.env" });
const PORT = Number(process.env.PORT);
exports.PORT = PORT;
exports.DB_TYPE = process.env.DB_TYPE;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_PORT = Number(process.env.DB_PORT);
exports.DB_USERNAME = process.env.DB_USERNAME;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB = process.env.DB;
