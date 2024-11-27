import mongoose, { Schema, Document } from "mongoose"
import { IOrderItems } from '../../shared/interfaces/OrderItems'

interface IOrderItemsModel extends IOrderItems, Document {}

const OrderItemsSchema: Schema = new Schema({
    orderId: { type: mongoose.Schema.ObjectId, ref: 'Order', required: true }, 
    pvzId: { type: mongoose.Schema.ObjectId, ref: 'PVZ', required: true },
    courierNumber: { type: Number, required: true },
    name: { type: String, required: true },
    url: {type: String, required: false},
    dateTo: { type: Date, required: true },
    quantity: { type: Number, required: true },
    discountPrice: { type: Number, required: false },
    price: { type: Number, required: true },
    deliverySum: { type: Number, required: true },
    payment: { type: Number, required: true },
    statusOrd: { type: Boolean, required: true, default: false },
    statusPai: { type: Boolean, required: true, default: false  },
    statusRec: { type: Boolean, required: true, default: false  },
    statusIss: { type: Boolean, required: true, default: false  }
  })

export default mongoose.model<IOrderItemsModel>('OrderItems', OrderItemsSchema, 'OrderItems')