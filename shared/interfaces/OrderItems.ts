export interface IOrderItems {
    courierNumber?: string
    name: string
    dateTo: Date
    quantity: number
    discountPrice: number
    price: number
    deliverySum: number
    payment: number
    balance: number
    statusOrd: boolean
    statusPai: boolean
    statusRec: boolean
    statusIss: boolean
}
