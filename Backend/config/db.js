import mongoose from 'mongoose'

 export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://zaidsaad327327327:v8sTMl5t8cScTrKe@cluster0.ucjqywz.mongodb.net/Food-delivery').then(() => {
        console.log('Connected to MongoDB')
    })

}








