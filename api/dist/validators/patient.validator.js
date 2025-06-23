"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const patientSchema = joi_1.default.object({
    fullName: joi_1.default.string().min(3).required(),
    email: joi_1.default.string().email().required(),
    phoneNumber: joi_1.default.string().pattern(/^\+?\d{7,15}$/).required(),
    documentPhoto: joi_1.default.string().required()
});
exports.default = patientSchema;
