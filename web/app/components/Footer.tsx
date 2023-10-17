import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-[1240px] mx-auto grid grid-cols-4 gap-10 py-10'>
            <div className='text-secondary'>
                <h3 className='font-semibold text-xl'><span className='text-primary'>ZEP</span> Salad</h3>
                <p>Jez Salad is the pioneer of
                    healthy fruit salad with
                    high nutrition.</p>
                <p className='mt-14'>&copy;2024, Zep Salad</p>
            </div>
            <div>
                <h3 className='text-primary font-semibold text-xl'>Feature</h3>
                <ul className='text-secondary flex flex-col gap-3'>
                    <li>
                        <Link href=''>Menu</Link>
                    </li>
                    <li>
                        <Link href=''>Promo</Link>
                    </li>
                    <li>
                        <Link href=''>Contact</Link>
                    </li>
                    <li>
                        <Link href=''>About Us</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-primary font-semibold text-xl'>Get in Touch</h3>
            </div>
        </footer>
    )
}

export default Footer