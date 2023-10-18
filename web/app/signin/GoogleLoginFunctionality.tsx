'use client'
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';

const GoogleLoginFunctionality = () => {
    const { googleLogin } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result: any) => {
                console.log(result.user);
            })
    }
    return (
        <button
            onClick={() => handleGoogleLogin()}
            className='w-full bg-primary py-3 rounded-md flex items-center gap-2 justify-center font-semibold my-3'><FaGoogle className='w-6 h-6' />Sign In with Google</button>
    )
}

export default GoogleLoginFunctionality