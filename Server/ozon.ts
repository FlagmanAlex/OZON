import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import clientRoute from './routes/clientRoute'


const BD_TOKEN = process.env.BD_TOKEN as string
const BD_NAME = process.env.BD_NAME as string

const port = 3000

const app = express()

if (BD_TOKEN) {
    mongoose.connect(BD_TOKEN, { dbName: BD_NAME })
    mongoose.connection.on('connected', () => console.log('Соединение с MongoDB успешно установлено.'));
    mongoose.connection.on('error', (err) => console.error('Ошибка подключения к MongoDB:', err));
    mongoose.connection.on('disconnected', () => console.log('Соединение с MongoDB закрыто.'));

} else console.error('BD_TOKEN не указан в файле .env');


app.use(cors())
app.use(express.json())

app.use('/client', clientRoute)

app.listen(port, () => console.log(`Сервер запущен на ${port} порту`))