import express from "express"
import cors from 'cors'
import 'dotenv/config'
import userRoutes from './routes/user.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(userRoutes);

export default app