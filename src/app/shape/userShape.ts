export type LoginShape = {
    username: string,
    password: string
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