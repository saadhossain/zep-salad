'use client'
import { AuthContext } from '@/app/context/AuthProvider';
import { ContextProps } from '@/app/interfaces/interfaces';
import { saveUsersToDatabase } from '@/app/utils/utils';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import ButtonLoader from '../loader/ButtonLoader';

const GoogleLoginFunctionality = () => {
    const { googleLogin } = useContext(AuthContext) as ContextProps;
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleGoogleLogin = () => {
        setLoading(true)
        googleLogin()
            .then(async (result: any) => {
                const user = result.user;
                const data = await saveUsersToDatabase(user);
                //Redirect to dashboard page after login
                Cookies.set("loggedin", "true");
                router.push("/dashboard");
                console.log(data);
                setLoading(false)
            })
    }
    return (
        <button
            onClick={() => handleGoogleLogin()}
            className='w-full bg-primary py-3 rounded-md flex items-center gap-2 justify-center font-semibold my-3'>{loading ? <ButtonLoader title='Signing in with Google' /> : <><FaGoogle className='w-6 h-6' /> Sign In with Google</>}</button>
    )
}

export default GoogleLoginFunctionality