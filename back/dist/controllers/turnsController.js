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
const getTurns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json("Obtener el listado de todos los turnos de todos los usuarios");
});
exports.getTurns = getTurns;
const getTurnsdetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json("Obtener el detalle de un turno específico");
});
exports.getTurnsdetail = getTurnsdetail;
const postAgend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json("Agendar un nuevo turno");
});
exports.postAgend = postAgend;
const putStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json("Cambiar el estatus de un turno a “cancelled”.");
});
exports.putStatus = putStatus;
