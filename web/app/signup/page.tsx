'use client'
import Link from 'next/link';
import { useContext, useState } from 'react';
import GoogleLoginFunctionality from '../signin/GoogleLoginFunctionality';
import ButtonLoader from '../components/loader/ButtonLoader';
import { AuthContext } from '../context/AuthProvider';
import { ContextProps } from '../interfaces/interfaces';

const SignUp = () => {
  const { createUser, loading, setLoading, user } = useContext(AuthContext) as ContextProps;
  const [email, setEmail] = useState('');
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  }
  //Handle User login functionality using email and password
  const handleUserRegister = (e: any) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target
    const password = form.password.value
    createUser(email, password)
      .then((result: any) => {
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err)
        setLoading(false);
      })
  }
  console.log(user)
  return (
    <div className='flex flex-col items-center my-16'>
      <div className="flex flex-col w-2/5 p-6 rounded-md sm:p-10 bg-secondary text-gray-100 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Register to access your account</p>
        </div>
        <form
          onSubmit={handleUserRegister}
          className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input onChange={handleEmail} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 rounded-md text-secondary focus:outline-none" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">Password</label>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 rounded-md text-secondary focus:outline-none" />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-gray-900">{loading ? <ButtonLoader title='Creating Account'/>: 'Sign Up'}</button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">Already have an account?
              <Link href="/signin" className="text-xl font-semibold ml-2 text-primary">Sign In</Link>.
            </p>
          </div>
        </form>
        {/* Social login section */}
        <GoogleLoginFunctionality />
      </div>
    </div>
  )
}

export default SignUp