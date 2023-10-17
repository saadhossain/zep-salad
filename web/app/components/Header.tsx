import Link from 'next/link'

const Header = () => {
    return (
        <div className='w-[1240px] mx-auto py-2'>
            <div className='flex justify-between items-center'>
                <h2 className='uppercase text-primary font-bold text-2xl'>Zep <span className='text-secondary'>Salad</span></h2>
                <div className='text-secondary font-semibold'>
                    <ul className='flex gap-8'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/menus'>Menus</Link></li>
                        <li><Link href='/offers'>Offers</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <Link href='/signup' className='text-white font-semibold bg-primary rounded-3xl px-4 py-2'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Header