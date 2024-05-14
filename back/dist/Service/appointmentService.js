"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatus = exports.createTurn = exports.getTurnById = exports.getAllTurns = void 0;
const appointment_1 = require("../types/appointment");
const appointments_1 = require("../entities/appointments");
const config_1 = require("../config");
const user_1 = require("../entities/user");
const getAllTurns = function (userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointments = yield config_1.AppDataSource.getRepository(appointments_1.Appointments).find({
                where: userId ? { user: { id: Number(userId) } } : {},
                relations: ["user"]
            });
            if (appointments.length === 0) {
                throw new Error("No appointments found");
            }
            return appointments;
        }
        catch (error) {
            throw new error(error);
        }
    });
};
exports.getAllTurns = getAllTurns;
const getTurnById = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const turns = config_1.AppDataSource.manager.getRepository(appointments_1.Appointments).findOne({
                where: { id },
                relations: ["user"]
            });
            if (!turns) {
                throw new Error("appointment not found");
            }
            return turns;
        }
        catch (error) {
            throw new error(error);
        }
    });
};
exports.getTurnById = getTurnById;
const createTurn = function (turn) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield config_1.AppDataSource.getRepository(user_1.User).findOne({
                where: { id: turn.userId },
            });
            if (!user) {
                throw new Error("User for this appointment not found");
            }
            const app = {
                date: turn.date,
                time: turn.time,
            };
            const newTurn = yield config_1.AppDataSource.getRepository(appointments_1.Appointments).save(Object.assign(Object.assign({}, app), { user }));
            if (!newTurn) {
                throw new Error("appointment not created");
            }
            return newTurn;
        }
        catch (error) {
            throw new error(error);
        }
    });
};
exports.createTurn = createTurn;
const changeStatus = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const change = yield config_1.AppDataSource.getRepository(appointments_1.Appointments).findOne({
                where: { id },
                relations: ["user"],
            });
            if (!change) {
                throw new Error("appointment not found");
            }
            const update = yield config_1.AppDataSource.getRepository(appointments_1.Appointments).save(Object.assign(Object.assign({}, change), { status: appointment_1.Status.CANCELED }));
            if (!update) {
                throw new Error("Appointment not cancelled");
            }
            return update;
        }
        catch (error) {
            throw error;
        }
    });
};
exports.changeStatus = changeStatus;
