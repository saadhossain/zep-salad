import Link from 'next/link'

const DashoardSidebar = () => {
    return (
        <div className='w-3/12 bg-secondary p-5 my-6 rounded-xl text-white font-semibold'>
            <ul>
                <li className='p-3 hover:bg-primary rounded'><Link href='/dashboard'>Dashboard</Link></li>
                <li className='p-3 hover:bg-primary rounded'><Link href='/dashboard/reviews'>Reviews</Link></li>
                <li className='p-3 hover:bg-primary rounded'><Link href='/dashboard/users'>Users</Link></li>
                <li className='p-3 hover:bg-primary rounded'><Link href='/dashboard/menus'>Menus</Link></li>
                <li className='p-3 hover:bg-primary rounded'><Link href='/dashboard/orders'>Orders</Link></li>
            </ul>
        </div>
    )
}

export default DashoardSidebar