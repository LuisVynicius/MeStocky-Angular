export type LoginShape = {
    username: string,
    password: string
}

export type TokenShape = {
    token: string
}

export type ValidTokenShape = {
    valided: boolean
}

export type UserAdminShape = {
    id: number, 
    username: string,
    email: string,
    role: string
}

export type UserCredentialsShape = {
    username: string,
    email: string
}

export type UserPasswordShape = {
    old_password: string,
    new_password: string
}