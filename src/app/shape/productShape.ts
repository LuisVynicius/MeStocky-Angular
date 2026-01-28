export type ReportShape = {
    reason: string,
    date: string,
    product: string,
    quantity: number,
    change_type: boolean
}

export type ProductChangeShape = {
    id: number,
    quantity: number,
    change_type: boolean,
    reason_id: number
}

export type StockShape = {
    id: number,
    name: string,
    category: string,
    quantity: number,
    min_quantity: number
}

export type ProductCreateShape = {
    name: string,
    quantity: number,
    min_quantity: number,
    category_id: number
}

export type ProductUpdateShape = {
    id: number,
    name: string,
    min_quantity: number,
    category_id: number
}