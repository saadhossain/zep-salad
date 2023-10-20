'use client'
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { Props } from 'next/script';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../config/firebase.config';
import { ContextProps, UserProps } from '../interfaces/interfaces';

export const AuthContext = createContext<ContextProps | null>(null)
const AuthProvider: React.FC<Props> = ({ children }) => {
    //Get the firebase auth
    const auth: Auth = getAuth(app);
    //Create a Provider for google login
    const googleProiver = new GoogleAuthProvider()
    //Loading state
    const [loading, setLoading] = useState(true)
    //Get user from the auth state and set to state
    const [user, setUser] = useState<UserProps | null>(null)
    //Create a new user using email and password
    const createUser = (email: string, password: string) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Create a User using Google Account
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProiver)
    }
    //Update User Profile after registration
    const currentUser: any = auth.currentUser;
    const updateUser = (fullName: string, profileImage: string) => {
        setLoading(true)
        return updateProfile(currentUser, {
            displayName: fullName,
            photoURL: profileImage
        })
    }
    //User Password Reset
    const passwordReset = (email: string) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    //User login
    const userLogin = (email: string, password: string) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //User Logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //Get user from auth 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [auth]);
    const authInfo = { createUser, googleLogin, loading, setLoading, userLogin, user, logOut, passwordReset }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;