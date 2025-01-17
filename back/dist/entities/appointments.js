"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointments = void 0;
const typeorm_1 = require("typeorm");
const appointment_1 = require("../types/appointment");
const user_1 = require("./user");
let Appointments = class Appointments {
};
exports.Appointments = Appointments;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Appointments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], Appointments.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "time" }),
    __metadata("design:type", String)
], Appointments.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: appointment_1.Status, default: appointment_1.Status.ACTIVE }),
    __metadata("design:type", String)
], Appointments.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, user => user.appointmentse),
    __metadata("design:type", user_1.User)
], Appointments.prototype, "user", void 0);
exports.Appointments = Appointments = __decorate([
    (0, typeorm_1.Entity)({ name: "appointments" })
], Appointments);
