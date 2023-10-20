import { Auth, UserCredential } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'

export interface UserProps {
    displayName: string,
    email: string,
    photoURL?:string | null,
    uid: string,
}

export interface ContextProps {
    user: UserProps | null,
    createUser: (email: string, password: string) => Promise<UserCredential>,
    userLogin: (email: string, password: string) => Promise<UserCredential>
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    googleLogin: () => Promise<UserCredential>,
    logOut: () => Promise<void>
}