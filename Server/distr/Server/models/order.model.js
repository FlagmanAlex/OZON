"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ItemSchema = new mongoose_1.Schema({
    pvz: { type: mongoose_1.default.Schema.ObjectId, ref: 'PVZ', required: true },
    courierNumber: { type: Number, required: true },
    name: { type: String, required: true },
    url: { type: String, required: false },
    dateTo: { type: Date, required: true },
    quantity: { type: Number, required: true },
    discountPrice: { type: Number, required: false },
    price: { type: Number, required: true },
    payment: { type: Number, required: true },
    ordered: { type: Boolean, required: true, default: false },
    paid: { type: Boolean, required: true, default: false },
    received: { type: Boolean, required: true, default: false },
    issued: { type: Boolean, required: true, default: false }
});
const OrderSchema = new mongoose_1.Schema({
    orderNum: { type: Number, required: true },
    client: { type: mongoose_1.default.Schema.ObjectId, ref: 'Client', required: true },
    orderDate: { type: Date, required: true, default: new Date() },
    item: [ItemSchema]
});
exports.default = mongoose_1.default.model('Order', OrderSchema, 'Order');
