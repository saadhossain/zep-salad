'use client'

import Ratings from './Ratings'

const AddReview = () => {
    return (
        <div>
            <h2 className='border-l-4 border-primary px-2 text-2xl font-semibold text-primary'>Add a Review</h2>
            <div className="flex flex-col max-w-md p-2 rounded-md border border-secondary text-secondary mt-5">
                <form className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-md font-semibold text-primary">Select the Item</h4>
                            <select className="w-full px-3 py-2 border rounded-md border-gray-700 text-secondary">
                                <option value="">Menu 1</option>
                                <option value="">Menu 2</option>
                                <option value="">Menu 3</option>
                                <option value="">Menu 4</option>
                            </select>
                        </div>
                        <Ratings/>
                        <div>
                            <div className="flex justify-between mb-2">
                                <h4 className="text-md font-semibold text-primary">Write your Review</h4>
                            </div>
                            <textarea name="message" id="message" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 text-secondary" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white">Add Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddReview