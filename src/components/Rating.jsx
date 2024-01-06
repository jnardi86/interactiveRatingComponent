import React, { useState } from 'react'
import star from '../assets/images/icon-star.svg'
import ratingNumber from '../ratingNumber'

const Rating = ({ onRatingSubmit }) => {

    const [selectedNumber, setSelectedNumber] = useState(null)

    const handleSelectedNumber = (numRating) => {
        setSelectedNumber(
            numRating === selectedNumber ? null : numRating
        )
        console.log(numRating)
    }

    const handleSubmit = () => {
        selectedNumber != null && onRatingSubmit(selectedNumber)
    }

    return (
        <div className='flex flex-col gap-4 p-5 lg:p-10'>
            <div className='w-10 h-10 flex flex-col justify-center rounded-full bg-MediumBlue'>
                <img src={star} alt="Star" className='mx-auto' />
            </div>
            <div className='text-White font-Overpass font-bold text-xl'>
                How did we do?
            </div>
            <div className=' text-MediumGrey font-Overpass text-[15px]'>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </div>
            <div className='flex justify-items-start space-x-5 pt-3'>
                {
                    ratingNumber.map((numRating) => (
                        <div
                            key={numRating.id}
                            onClick={
                                () => handleSelectedNumber(numRating.value)
                            }
                            className={`w-10 h-10 flex justify-center items-center rounded-full font-Overpass text-MediumGrey cursor-pointer text-xs 
                            ${selectedNumber === numRating.value ? 'bg-Orange' : 'bg-MediumBlue hover:bg-LightGrey'}
                            `}
                        >
                            {numRating.value}
                        </div>
                    ))
                }
            </div>
            <div className='pt-5 pb-5'>
                <button
                    onClick={handleSubmit}
                    className=' w-full h-10 text-White bg-Orange rounded-2xl font-Overpass text-sm tracking-widest '
                >
                    SUBMIT
                </button>
            </div>

        </div>
    )
}

export default Rating