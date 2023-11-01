'use client'
import Cookies from "js-cookie";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useContext } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { AuthContext } from '../context/AuthProvider';
import { ContextProps } from '../interfaces/interfaces';
import dashboard from '../../public/dashboard.svg'

const Header = () => {
    const { logOut, user } = useContext(AuthContext) as ContextProps;
    // console.log(user);
    const router = useRouter();
    const handleLogout = () => {
        logOut()
            //Redirect to home page after logout
            .then((res) => {
                Cookies.remove("loggedin");
                router.push('/')
            })
    }
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
                            <Link href='/dashboard'>
                                <Image src={dashboard} alt='Dashboard' width={40} height={40}/>
                                {/* <Image src={user.photoURL} alt={user.displayName} width={40} height={40} className='rounded-full' /> */}
                            </Link>
                            <AiOutlineLogout
                                onClick={() => handleLogout()}
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