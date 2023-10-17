import Image from 'next/image'
import Link from 'next/link'
import Menus1 from '../../public/menus/menu-items-1.png'
import Menus2 from '../../public/menus/menu-items-2.png'
import Menus3 from '../../public/menus/menu-items-3.png'

const FoodMenus = () => {
    return (
        <div className='w-[1240px] mx-auto my-14 text-center'>
            <h3 className='text-5xl text-secondary font-bold'>ENJOY THE BEST MENU AND GET<br /><span className='text-primary'>DISCOUNTS</span> AVAILABLE</h3>
            {/* menu items */}
            <div className='grid grid-cols-3 gap-16 my-10'>
                {/* item 1 */}
                <Link href='/' className='relative'>
                    <Image src={Menus1} alt='Menu Item' />
                    <div className='text-white absolute bottom-10 left-10'>
                        <h3 className='text-2xl font-semibold'>Mini Salad Yammy</h3>
                        <h1 className='font-bold text-4xl'>$ 2.99</h1>
                    </div>
                </Link>
                {/* item 2 */}
                <Link href='/' className='relative'>
                    <Image src={Menus2} alt='Menu Item' />
                    <div className='text-white absolute bottom-10 left-10'>
                        <h3 className='text-2xl font-semibold'>Completed Salad</h3>
                        <h1 className='font-bold text-4xl'>$ 3.99</h1>
                    </div>
                </Link>
                {/* item 3 */}
                <Link href='/' className='relative'>
                    <Image src={Menus3} alt='Menu Item' />
                    <div className='text-white absolute bottom-10 left-10'>
                        <h3 className='text-2xl font-semibold'>Delicious Salad</h3>
                        <h1 className='font-bold text-4xl'>$ 4.99</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default FoodMenus