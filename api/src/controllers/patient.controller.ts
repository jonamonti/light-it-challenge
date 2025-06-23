import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import patientSchema from "../validators/patient.validator";
import { sendConfirmationEmail } from "../utils/email";

const prisma = new PrismaClient()

export const createPatient = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({error: 'Document photo is required'})
    }

    const bodyWithFile = {
      ...req.body,
      documentPhoto: `/uploads/${file.filename}`
    }

    const { error, value } = patientSchema.validate(bodyWithFile)
    
    if (error) {
      return res.status(400).json({error: error.details[0].message})
    }

    // check if the email already exists
    const existingPatient = await prisma.patient.findUnique({
      where: { email: value.email}
    })

    if (existingPatient) {
      return res.status(409).json({error: `Email ${value.email} already exists`})
    }

    // Create patient
    const patient = await prisma.patient.create({data: value})

    setImmediate(() => {
      sendConfirmationEmail(patient.email, patient.fullName)
      .catch(err => console.error('Email sending failed:', err.message))
    })
    return res.status(200).json({message: 'Patient added successfully', data: patient})
  } catch (error) {
    console.log(error)
  }
}

export const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await prisma.patient.findMany()
    return res.status(200).json({message: 'Patients sent successfuly.', data: patients})
  } catch (error) {
    console.log(error)
  }
}
