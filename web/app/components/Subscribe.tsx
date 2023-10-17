
const Subscribe = () => {
    return (
        <div className='w-[1240px] mx-auto my-10 py-20 rounded-2xl text-center bg-[#FFF3E1]'>
            <h3 className='text-5xl text-secondary font-bold'>Subscribe To Get The Latest<br />
                <span className='text-primary'>Promo</span> from Jez Salad</h3>
            <p className='text-secondary my-10'>We recommended you to subscribe to our promo program,<br />drop your email below to get daily update about us</p>
            {/* Subscribe Input */}
            <div className='flex justify-center'>
                <div className='w-2/4 flex justify-between bg-white rounded-3xl p-2'>
                    <input className='w-9/12 py-2 px-4 rounded-3xl focus:outline-none text-secondary' type='text' placeholder='Enter your email address' />
                    <button className='w-3/12 py-2 px-4 bg-primary text-white rounded-3xl font-semibold' type='submit'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe