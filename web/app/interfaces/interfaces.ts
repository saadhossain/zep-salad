import { Auth, UserCredential } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'

export interface UserProps {
    displayName: string,
    email: string,
    photoURL:string,
    uid: string,
    isAdmin?:boolean
}


export interface ContextProps {
    user: UserProps | null,
    savedUser: UserProps | null,
    createUser: (email: string, password: string) => Promise<UserCredential>,
    userLogin: (email: string, password: string) => Promise<UserCredential>
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    googleLogin: () => Promise<UserCredential>,
    logOut: () => Promise<void>,
    rating:string,
    setRating: Dispatch<SetStateAction<string>>
}