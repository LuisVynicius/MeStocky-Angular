export type ProductShape = {
    name: string,
    category: string,
    quantity: number,
    min_quantity: number,
    description: string | null
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
    min_quantity: number,
    category_id: number,
    description: string
}

export type ProductUpdateShape = {
    id: number,
    name: string,
    min_quantity: number,
    category_id: number,
    description: string
}