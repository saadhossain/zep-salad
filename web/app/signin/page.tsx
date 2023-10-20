'use client'
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import GoogleLoginFunctionality from './GoogleLoginFunctionality';
import ButtonLoader from '../components/loader/ButtonLoader';
import { ContextProps } from '../interfaces/interfaces';

const SignIn = () => {
    const { userLogin, loading, setLoading } = useContext(AuthContext) as ContextProps;
    const [email, setEmail] = useState('');
    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }
    //Handle User login functionality using email and password
    const handleUserLogin = (e: any) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target
        const password = form.password.value
        userLogin(email, password)
            .then((result: any) => {
                setLoading(false);
            })
            .catch((err: any) => {
                console.error(err)
                setLoading(false);
            })
    }
    return (
        <div className='flex flex-col items-center my-16'>
            <div className="flex flex-col w-2/5 p-6 rounded-md sm:p-10 bg-secondary text-gray-100 shadow-2xl">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-400">Sign in to access your account</p>
                </div>
                <form
                    onSubmit={handleUserLogin}
                    className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input onChange={handleEmail} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 rounded-md text-secondary focus:outline-none" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 rounded-md text-secondary focus:outline-none" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-gray-900">{loading ? <ButtonLoader title='Signing In'/>: 'Sign In'}</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                            <Link href="/signup" className="text-xl font-semibold ml-2 text-primary">Sign up</Link>.
                        </p>
                    </div>
                </form>
                {/* Social login section */}
                <GoogleLoginFunctionality />
            </div>
        </div>
    )
}

export default SignIn