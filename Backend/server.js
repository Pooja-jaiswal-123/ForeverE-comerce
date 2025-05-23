import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import userModel from './models/userModel.js'
import productRouter from './routes/productRoute.js'
import connectDB from './config/mongodb.js'; // ✅ Default export match karega


// App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
// middlewares
app.use(express.json())
app.use(cors())

// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
	res.send("API Working")
})
app.listen(port, () => console.log('Server Started on PORT :' + port)
)