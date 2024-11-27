import mongoose, { Schema, Document } from "mongoose"
import { IPVZ } from "../../shared/interfaces/Pvz"

interface IPVZModel extends IPVZ, Document {}

const PVZSchema = new Schema ({
    name: {type: String, required: true}
})

export default mongoose.model<IPVZModel>('PVZ', PVZSchema, 'PVZ')