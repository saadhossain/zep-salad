'use client'
import { AuthContext } from '@/app/context/AuthProvider';
import { ContextProps } from '@/app/interfaces/interfaces';
import { useContext } from 'react';
import { BsFillEmojiFrownFill, BsFillEmojiAngryFill, BsFillEmojiSmileFill, BsEmojiLaughingFill, BsFillEmojiSunglassesFill } from 'react-icons/bs';
const Ratings = () => {
    const {rating, setRating} = useContext(AuthContext) as ContextProps;
    return (
        <div>
            <h4 className="text-md font-semibold text-primary mb-2">Rating</h4>
            <div className='flex gap-2 items-center justify-between'>
                <div
                    onClick={() => setRating('Disapointed')}
                    className='flex flex-col gap-1 items-center font-semibold cursor-pointer'>
                    <BsFillEmojiAngryFill className={`text-2xl ${rating === 'Disapointed' && 'text-primary'}`} />
                    Disapointed
                </div>
                <div
                    onClick={() => setRating('Unsatisfied')}
                    className='flex flex-col gap-1 items-center font-semibold cursor-pointer'>
                    <BsFillEmojiFrownFill className={`text-2xl ${rating === 'Unsatisfied' && 'text-primary'}`} />
                    Unsatisfied
                </div>
                <div
                    onClick={() => setRating('Good')}
                    className='flex flex-col gap-1 items-center font-semibold cursor-pointer'>
                    <BsFillEmojiSmileFill className={`text-2xl ${rating === 'Good' && 'text-primary'}`} />
                    Good
                </div>
                <div
                    onClick={() => setRating('Satisfied')}
                    className='flex flex-col gap-1 items-center font-semibold cursor-pointer'>
                    <BsEmojiLaughingFill className={`text-2xl ${rating === 'Satisfied' && 'text-primary'}`} />
                    Satisfied
                </div>
                <div
                    onClick={() => setRating('Excellent')}
                    className='flex flex-col gap-1 items-center font-semibold cursor-pointer'>
                    <BsFillEmojiSunglassesFill className={`text-2xl ${rating === 'Excellent' && 'text-primary'}`} />
                    Excellent
                </div>
            </div>
        </div>
    )
}

export default Ratings