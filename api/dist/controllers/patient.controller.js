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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatients = exports.createPatient = void 0;
const client_1 = require("@prisma/client");
const patient_validator_1 = __importDefault(require("../validators/patient.validator"));
const email_1 = require("../utils/email");
const prisma = new client_1.PrismaClient();
const createPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'Document photo is required' });
        }
        const bodyWithFile = Object.assign(Object.assign({}, req.body), { documentPhoto: `/uploads/${file.filename}` });
        const { error, value } = patient_validator_1.default.validate(bodyWithFile);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        // check if the email already exists
        const existingPatient = yield prisma.patient.findUnique({
            where: { email: value.email }
        });
        if (existingPatient) {
            return res.status(409).json({ error: `Email ${value.email} already exists` });
        }
        // Create patient
        const patient = yield prisma.patient.create({ data: value });
        setImmediate(() => {
            (0, email_1.sendConfirmationEmail)(patient.email, patient.fullName)
                .catch(err => console.error('Email sending failed:', err.message));
        });
        return res.status(200).json({ message: 'Patient added successfully', data: patient });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createPatient = createPatient;
const getPatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patients = yield prisma.patient.findMany();
        return res.status(200).json({ message: 'Patients sent successfuly.', data: patients });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPatients = getPatients;
