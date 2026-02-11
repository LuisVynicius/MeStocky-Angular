export type ReportShape = {
    id: number,
    reason: string,
    date: string,
    product: string,
    quantity: number,
    change_type: boolean
}

export type ReportUpdateShape = {
    id: number,
    reason_id: number
}