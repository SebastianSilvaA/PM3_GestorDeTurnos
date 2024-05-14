"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointments = void 0;
const appointment_1 = require("../types/appointment");
appointment_1.Status;
exports.appointments = [{
        id: 1,
        date: new Date("1900-100-100"),
        time: "a las 2",
        status: appointment_1.Status.ACTIVE,
        userId: 1
    }];
