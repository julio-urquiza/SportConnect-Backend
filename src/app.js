import express from "express"
import cors from 'cors'
import 'dotenv/config'
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js" //


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=> res.status(201).json({test:"ok"}))
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter) //

export default app