import { DropArea, DropText, Error, Field, FormContainer, Input, Label, Spinner, SubmitButton, Title } from './styled'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registrationSchema } from './validations'
import type { FormData } from '../../types/types'
import { Row } from './styled'
import { useDropzone } from 'react-dropzone'
import { useState, type FC } from 'react'
import api from '../../services/api'
import MainModal from '../Modals/MainModal'
import { StatusCard } from '../Cards/styled'
import { AxiosError } from 'axios';

type Props = {
  onClose: () => void
  onSuccess: () => void
}

const RegistrationForm: FC<Props> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneCountry: '',
      phoneNumber: '',
      documentPhoto: undefined,
    }
  })

  const documentPhoto = watch('documentPhoto');

  const onDrop = (acceptedFiles: File[]) => {
    const jpgFile = acceptedFiles.find(file => file.type === 'image/jpeg')
    if (jpgFile) setValue('documentPhoto', jpgFile)
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    const body = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: `${data.phoneCountry}${data.phoneNumber}`,
      documentPhoto: data.documentPhoto
    }

    try {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 3000)); // artificial delay for spinner visibility
      const response = await api.post('/patients', body, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.statusText === 'OK') {
        setShowSuccessModal(true)
        setTimeout(() => {
          setShowSuccessModal(false)
          onSuccess()
        }, 5000)
      }
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      setErrorMessage(err.response?.data?.error || 'Something went wrong');
      setShowErrorModal(true)
      setTimeout(() => setShowErrorModal(false), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/jpeg': ['.jpg'] } })
  return (
    <>
      {showSuccessModal && (
        <MainModal isOpen={true} onClose={() => { }}>
          <StatusCard status='success'>
            <Title>✅ Patient registered successfully!</Title>
          </StatusCard>
        </MainModal>
      )}

      {showErrorModal && (
        <MainModal isOpen={true} onClose={() => { }}>
          <StatusCard status='error'>
            <Title>❌ {errorMessage}</Title>
          </StatusCard>
        </MainModal>
      )}
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Title>Registration Form</Title>
        </Field>
        <Field>
          <Label>Full Name</Label>
          <Input {...register('fullName')} placeholder='Jhon Doe' />
          {errors.fullName && <Error>{errors.fullName.message}</Error>}
        </Field>

        <Field>
          <Label>Email</Label>
          <Input {...register('email')} placeholder='example@gmail.com' />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Field>

        <Row>
          <Field>
            <Label>Country Code</Label>
            <Input {...register('phoneCountry')} placeholder='+1' />
            {errors.phoneCountry && <Error>{errors.phoneCountry.message}</Error>}
          </Field>
          <Field>
            <Label>Phone Number</Label>
            <Input {...register('phoneNumber')} placeholder='8084634945' />
            {errors.phoneNumber && <Error>{errors.phoneNumber.message}</Error>}
          </Field>
        </Row>

        <Field>
          <Label>Document Photo (.jpg only)</Label>
          <DropArea {...getRootProps()}>
            <input {...getInputProps()} />
            <DropText>
              {isDragActive ? 'Drop the file here...' : 'Drag & drop or click to upload'}
            </DropText>
            {documentPhoto instanceof File && (
              <small style={{ color: 'black' }}>
                Selected: {(documentPhoto as File).name}
              </small>
            )}
          </DropArea>
          {errors.documentPhoto && <Error>{errors.documentPhoto.message}</Error>}
        </Field>

        <SubmitButton type="submit">
          {isLoading ? <Spinner /> : 'Register'}
        </SubmitButton>
      </FormContainer>
    </>
  )
}

export default RegistrationForm