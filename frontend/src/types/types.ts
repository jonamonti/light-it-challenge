import type { InferType } from "yup"
import type { registrationSchema } from "../components/Forms/validations"

export type Patient = {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  documentPhoto: string
}

export type FormData = InferType<typeof registrationSchema>

export type StatusCardProps = {
  status?: 'success' | 'error';
}