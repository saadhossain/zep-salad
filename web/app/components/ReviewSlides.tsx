import Image from 'next/image';
import "react-image-gallery/styles/css/image-gallery.css";
import Review1 from '../../public/reviews/review-1.webp';
import Review2 from '../../public/reviews/review-2.webp';
import Review3 from '../../public/reviews/review-3.webp';

const ReviewSlides = () => {
    return (
        <div className='w-3/5 grid grid-cols-3 gap-5'>
            {/* Review 1 */}
            <div className='bg-white px-5 py-10 rounded-lg hover:shadow-2xl'>
                <Image src={Review1} alt='Review 1' width={100} height={100} className='rounded-lg' />
                <h3 className='text-2xl font-semibold text-primary my-3'>Yeasir Arafat</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quia doloremque quaerat, corrupti laudantium provident ipsa? Illum, iure amet. Aliquam.</p>
            </div>
            {/* Review 2 */}
            <div className='bg-white px-5 py-10 rounded-lg hover:shadow-2xl'>
                <Image src={Review2} alt='Review 2' width={100} height={100} className='rounded-lg' />
                <h3 className='text-2xl font-semibold text-primary my-3'>Yeasir Arafat</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quia doloremque quaerat, corrupti laudantium provident ipsa? Illum, iure amet. Aliquam.</p>
            </div>
            {/* Review 3 */}
            <div className='bg-white px-5 py-10 rounded-lg hover:shadow-2xl'>
                <Image src={Review3} alt='Review 3' width={100} height={100} className='rounded-lg' />
                <h3 className='text-2xl font-semibold text-primary my-3'>Yeasir Arafat</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quia doloremque quaerat, corrupti laudantium provident ipsa? Illum, iure amet. Aliquam.</p>
            </div>
        </div>
    );
};

export default ReviewSlides;