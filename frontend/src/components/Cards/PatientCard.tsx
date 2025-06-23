import { useState, type FC } from 'react'
import type { Patient } from '../../types/types'
import { Card, Header, Name, Image, VisibleDetails, Data } from './styled'


const PatientCard: FC<Patient> = ({ fullName, email, phoneNumber, documentPhoto }) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const imageUrl = `${import.meta.env.VITE_API_URL}${documentPhoto}`;
  return (
    <Card expanded={expanded.toString()}>
      <Header onClick={() => setExpanded((prev) => !prev)}>
        <Image src={imageUrl} alt={fullName} />
        <Name>{fullName}</Name>
      </Header>
      {expanded ? (
        <VisibleDetails>
          <Data>Email: {email}</Data>
          <Data>Phone: {phoneNumber}</Data>
        </VisibleDetails>
      ) : null}
    </Card>
  )
}

export default PatientCard