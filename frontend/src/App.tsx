
import './App.css'
import styled from 'styled-components'
import MainButton from './components/Buttons/MainButton';
import MainPlaceholder from './components/Cards/MainPlaceholder';
import { Row } from './components/Containers/styled';
import PatientCard from './components/Cards/PatientCard';
import type { Patient } from './types/types';
import { PatientList } from './components/Cards/styled';
import { useEffect, useState } from 'react';
import MainModal from './components/Modals/MainModal';
import RegistrationForm from './components/Forms/RegistrationForm';
import api from './services/api';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: var(--space-md);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  /* @media (max-width: 640px) {
    gap: 1.25rem
  } */
`;

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [patients, setPatients] = useState<Patient[]>([])

  useEffect(() => {
    const fetchData = async () => {
      // artificial delay to show loader
      await new Promise(resolve => setTimeout(resolve, 3000));
      try {
        const response = await api.get('/patients');
        if (response.statusText === 'OK') {
          setPatients(response.data.data)
        }
      } catch (error) {
        console.error("🚀 ~ fetchData ~ error:", error)
      } finally {
        setIsLoading(false)
      }
    }
    if (!isModalVisible) fetchData()
  }, [isModalVisible])

  const handleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <AppContainer>
      <MainModal isOpen={isModalVisible} onClose={handleModal}>
        <RegistrationForm onClose={handleModal} />
      </MainModal>
      <Row>
        <h1>Patient Registration</h1>
        <MainButton label='Add Patient' onClick={handleModal} />
      </Row>
      {
        isLoading ? <MainPlaceholder text='Loading' isLoading={isLoading} /> :
          patients.length ? (
            <PatientList>
              {
                patients.map((patient: Patient) => {
                  return <PatientCard {...patient} key={patient.id} />
                })
              }
            </PatientList>
          ) : (
            <MainPlaceholder text='No patients registered yet.' />
          )
      }
    </AppContainer>
  )
}

export default App
