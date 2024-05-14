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
exports.putStatus = exports.postAgend = exports.getTurnsdetail = exports.getTurns = void 0;
const appointmentService_1 = require("../Service/appointmentService");
const getTurns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.query;
        const turns = yield (0, appointmentService_1.getAllTurns)(userId);
        res.status(200).json(turns);
    }
    catch (error) {
        res.status(404).send("Turns not found");
        throw new error(error);
    }
});
exports.getTurns = getTurns;
const getTurnsdetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const detail = yield (0, appointmentService_1.getTurnById)(Number(id));
        res.status(200).send(detail);
    }
    catch (error) {
        res.status(404).send("Turn not found");
        throw new error(error);
    }
});
exports.getTurnsdetail = getTurnsdetail;
const postAgend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId } = req.body;
        const turn = { date, time, userId };
        const postTurn = yield (0, appointmentService_1.createTurn)(turn);
        res.status(200).json({ message: "turn create", postTurn });
    }
    catch (error) {
        res.status(400).send("incorrect dates");
        throw new error(error);
    }
});
exports.postAgend = postAgend;
const putStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const putStatus = yield (0, appointmentService_1.changeStatus)(Number(id));
        res.status(200).json({ message: "Turn canceled", putStatus });
    }
    catch (error) {
        res.status(404).send("Turn not found");
        throw new error(error);
    }
});
exports.putStatus = putStatus;
