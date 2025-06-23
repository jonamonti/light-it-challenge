
import type { Request, Response } from "express";
import { Router } from "express";
import { createPatient, getPatients } from "../controllers/patient.controller";
import { upload } from "../middlewares/uploadFile";

const router = Router()
router.post('/', upload.single('documentPhoto'), (req: Request, res: Response) => {
  createPatient(req, res);
});
router.get('/', (req: Request, res: Response) => {
  getPatients(req, res)
})


export default router
