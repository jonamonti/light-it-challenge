"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patient_controller_1 = require("../controllers/patient.controller");
const uploadFile_1 = require("../middlewares/uploadFile");
const router = (0, express_1.Router)();
router.post('/', uploadFile_1.upload.single('documentPhoto'), (req, res) => {
    (0, patient_controller_1.createPatient)(req, res);
});
router.get('/', (req, res) => {
    (0, patient_controller_1.getPatients)(req, res);
});
exports.default = router;
