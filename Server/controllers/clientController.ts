import { Request, Response } from 'express'
import Client from '../models/client.model'

export const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await Client.find()
        console.log(clients);
        
        res.status(200).json(clients)
    } catch (error) {
        console.log('Ошибка базы данных', error)        
    }
}

export const getClient = async (req: Request, res: Response) => {
    try {
        const clientId = req.params.id
        const client = await Client.findById(clientId)

        if (!client) res.status(404).json({message: 'Клиент не найден'})
        else res.status(200).json(client)

    } catch (error) {
        console.log('Ошибка базы данных', error)        
        res.status(500).json({message: 'Ошибка сервера. попробуйте позже'})
    }
}

export const insertClient = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.log('Ошибка базы данных', error)
        res.status(500).json({message: 'Ошибка сервера. попробуйте позже'})
    }
}
export const deleteClient = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.log('Ошибка базы данных', error)
        res.status(500).json({message: 'Ошибка сервера. попробуйте позже'})
    }
}
