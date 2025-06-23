import * as yup from 'yup'

export const registrationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required.')
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, 'Only letters are allowed.')
    .max(40, 'Full name must be at most 40 characters.'),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a @gmail.com email')
    .max(40, 'Email must be at most 40 characters.'),
  phoneCountry: yup
    .string()
    .required('Country code is required')
    .matches(/^\+\d+$/, 'Must start with + followed by numbers')
    .max(4, 'Country code must be at most 4 characters'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Must be a valid number')
    .min(6, 'Phone number is too short.')
    .max(14, 'Phone number is too long.'),
  documentPhoto: yup.mixed().nullable().required('Document photo is required')
})