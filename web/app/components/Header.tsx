'use client'
import Link from 'next/link'
import { useContext } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { AuthContext } from '../context/AuthProvider'
import { ContextProps } from '../interfaces/interfaces'

const Header = () => {
    const { logOut, user } = useContext(AuthContext) as ContextProps;
    // console.log(user);
    return (
        <div className='w-[1240px] mx-auto py-2'>
            <div className='flex justify-between items-center'>
                <Link href='/'><h2 className='uppercase text-primary font-bold text-2xl'>Zep <span className='text-secondary'>Salad</span></h2></Link>
                <div className='text-secondary font-semibold'>
                    <ul className='flex gap-8'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/menus'>Menus</Link></li>
                        <li><Link href='/offers'>Offers</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                {/* Login Logout Button */}
                <div>
                    {
                        user ? <div className='flex gap-2 items-center'>
                            {/* <Image src={user.photoURL} alt={user.displayName} width={40} height={40} className='rounded-full' /> */}
                            <AiOutlineLogout
                                onClick={() => logOut()}
                                className='text-white h-10 w-10 bg-primary rounded-full p-2 cursor-pointer'
                            />
                        </div> : <Link href='/signin' className='text-white font-semibold bg-primary rounded-3xl px-4 py-2'>Sign In</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header