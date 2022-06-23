import { User } from "./user.model"

export interface Token {
    access_token: string
}

export interface DecodedToken extends User {
    exp: number
 }
