import Image from 'next/image'
import HeroImage from '../../../public/hero-image.png'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className='w-[1240px] mx-auto flex md:flex-row flex-col justify-between items-center'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-primary bg-[#FFF0DC] w-44 rounded-lg text-center'>#1 Best Healthy Salad</h4>
                <h1 className='font-bold text-7xl text-secondary'><span className='text-primary'>Skip</span> The Diet,<br /> Just Eat Healthy<br /> With Jez Salad</h1>
                <p className='text-lg text-secondary font-semibold'>
                    Imagine you don't need a diet because we provide healthy and delicious food for you!
                </p>
                {/* Order Button  */}
                <button className='text-white font-semibold bg-primary rounded-3xl w-36 px-5 py-3'>
                    <Link href='/menus'>Order Food</Link>
                </button>
                {/* Data Section */}
                <div className='flex gap-10 items-center'>
                    <p className='text-secondary text-lg'>
                        <span className='font-semibold'>5,000+</span><br/>
                        Customer
                    </p>
                    <p className='text-secondary text-lg'>
                        <span className='font-semibold'>8,500+</span><br/>
                        Delivery
                    </p>
                    <p className='text-secondary text-lg'>
                        <span className='font-semibold'>3,900+</span><br/>
                        Ratings
                    </p>
                </div>
            </div>
            <Image src={HeroImage} alt='Hero Image' className='h-[600px]' />
        </div>
    )
}

export default HeroSection