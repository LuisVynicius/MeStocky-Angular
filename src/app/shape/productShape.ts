export type ReportShape = {
    reason: string,
    date: string,
    product: string,
    quantity: number,
    type: boolean
}

export type StockShape = {
    id: number,
    name: string,
    category: string,
    quantity: number,
    min_quantity: number
}