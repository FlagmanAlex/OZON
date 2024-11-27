import mongoose, { Schema, Document } from 'mongoose'
import { IClient } from '../../shared/interfaces/Client'

interface IClientModel extends IClient, Document {}

const ClientSchema: Schema = new Schema ({
    name: { type: String, required: true },
    phone: {type: String},
    address: {type: String},
    GPS: {type: String},
    Percent: {type: Number}
})

export default mongoose.model<IClientModel>('Client', ClientSchema, 'Client')