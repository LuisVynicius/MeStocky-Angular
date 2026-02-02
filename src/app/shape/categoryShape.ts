export type CategoryShape = {
    id: number,
    name: string,
    quantity: number
}

export type CategoryCreateShape = {
    name: string
}

export type CategoryUpdateShape = {
    id: number,
    name: string
}