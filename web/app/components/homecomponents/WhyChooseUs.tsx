import Image from 'next/image'
import Industry from '../../../public/industry.png'
import Number1 from '../../../public/number-one.png'
import Trophy from '../../../public/trophy.png'
import Link from 'next/link'
const WhyChooseUs = () => {
    return (
        <div className='w-[1240px] mx-auto my-32'>
            {/* Heading Section */}
            <div className='flex justify-between items-center'>
                <h1 className='w-2/4 font-bold text-4xl text-secondary'>WHY CHOOSE US<span className='text-primary text-6xl'>?</span><br />FOR <span className='text-primary'>YOUR HEALTHY FOOD</span></h1>
                <p className='w-2/4 font-semibold text-secondary'>
                    We continue to consistently choose and maintain the quality of the fruit served, so that it remains fresh and nutritious when you eat it.
                </p>
            </div>
            {/* Feature Section */}
            <div className='flex justify-between gap-5 mt-10'>
                {/* Feature 1 */}
                <div className='text-secondary font-semibold flex flex-col gap-5 items-start py-10 px-5 border border-accent rounded-3xl w-72 hover:shadow-2xl'>
                    <Image src={Industry} alt='Industry' className='w-20 mb-10 bg-accent p-3 rounded-2xl'/>
                    <h3 className='text-2xl text-primary'>Industry Leading Food</h3>
                    <p>Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang memiliki cabang toko Jez Salad.</p>
                    <button className='hover:bg-primary hover:text-white py-2 px-3 rounded-3xl'><Link href='/'>Learn more &rarr;</Link></button>
                </div>
                {/* Feature 2 */}
                <div className='text-secondary font-semibold flex flex-col gap-5 items-start py-10 px-5 border border-accent rounded-3xl w-72 hover:shadow-2xl'>
                    <Image src={Number1} alt='Number1' className='w-20 mb-10 bg-accent p-3 rounded-2xl'/>
                    <h3 className='text-2xl text-primary'>#1 Healthy Fruit Salad</h3>
                    <p>Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang memiliki cabang toko Jez Salad.</p>
                    <button className='hover:bg-primary hover:text-white py-2 px-3 rounded-3xl'><Link href='/'>Learn more &rarr;</Link></button>
                </div>
                {/* Feature 3 */}
                <div className='text-secondary font-semibold flex flex-col gap-5 items-start py-10 px-5 border border-accent rounded-3xl w-72 hover:shadow-2xl'>
                    <Image src={Trophy} alt='Trophy' className='w-20 mb-10 bg-accent p-3 rounded-2xl'/>
                    <h3 className='text-2xl text-primary'>100 Top Brand</h3>
                    <p>Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang memiliki cabang toko Jez Salad.</p>
                    <button className='hover:bg-primary hover:text-white py-2 px-3 rounded-3xl'><Link href='/'>Learn more &rarr;</Link></button>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs