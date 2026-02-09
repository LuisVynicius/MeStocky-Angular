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

export type UserInformationsShape = {
    username: string,
    email: string,
    phone: string
}

export type UserCredentialsShape = {
    old_password: string,
    new_password: string
}

export type UserPasswordShape = {
    old_password: string,
    new_password: string
}

export type UserCreateShape = {
    username: string,
    password: string,
    email: string,
    role: number,
    phone: string
}