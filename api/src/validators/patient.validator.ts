import Joi from "joi";

const patientSchema = Joi.object({
  fullName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().pattern(/^\+?\d{7,15}$/).required(),
  documentPhoto: Joi.string().required()
})

export default patientSchema