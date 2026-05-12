import express from "express"
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=> res.status(201).json({test:"ok"}))

export default app