import express from 'express'
import cors from 'cors'
import patientRoutes from './routes/patient.routes'
import path from 'path'

const app = express()

app.use(cors());
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

app.use('/api/patients', patientRoutes)

export default app
