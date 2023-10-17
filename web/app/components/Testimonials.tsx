import ReviewSlides from './ReviewSlides'

const Testimonials = () => {
    return (
        <div className='bg-[#FFF3E1] py-12'>
            <div className='w-[1240px] mx-auto flex justify-between items-start'>
                <div className='w-2/5'>
                    <h1 className='font-bold text-5xl text-secondary uppercase'>What are People<br /> Saying <span className='text-primary'>About Us</span></h1>
                    <p className='w-4/5 font-semibold text-secondary my-12'>
                        We continue to consistently choose and maintain the quality of the fruit served, so that it remains fresh and nutritious when you eat it.
                    </p>
                    <div className='flex gap-3'>
                        <button className='bg-primary px-2 pb-1 rounded-md text-4xl'>&larr;</button>
                        <button className='bg-primary px-2 pb-1 rounded-md text-4xl'>&rarr;</button>
                    </div>
                </div>
                <ReviewSlides />
            </div>
        </div>
    )
}

export default Testimonials