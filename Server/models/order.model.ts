import mongoose, { Document, Schema } from 'mongoose';
import { IOrder } from '../../shared/interfaces/Order';

interface IOrderModel extends IOrder, Document {}

const OrderSchema: Schema = new Schema({
  orderNum: { type: Number, required: true },
  date: { type: Date, required: true, default: () => new Date() },
  clientId: { type: mongoose.Schema.ObjectId, ref: 'Client', required: true },
});

export default mongoose.model<IOrderModel>('Order', OrderSchema, 'Order');
