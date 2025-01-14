import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/UserRoutes.js'
import 'dotenv/config'
import cartRouter from './routes/CartRoute.js'

// app config
const app = express()
const port = 4000

// Middlewares
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// api Endpoint
app.use("/api/food", foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user' , userRouter)
app.use('/api/cart' , cartRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

