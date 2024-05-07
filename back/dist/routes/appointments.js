"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnsController_1 = require("../controllers/turnsController");
const appointmentRout = (0, express_1.Router)();
appointmentRout.get("/", turnsController_1.getTurns);
exports.default = appointmentRout;
