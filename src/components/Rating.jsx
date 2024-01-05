import React from 'react'
import star from '../assets/images/icon-star.svg'

const Rating = ({ onRatingSubmit }) => {

    const handleSelectedNumber = (numRating) => {
        onRatingSubmit(numRating)
    }

    const ratingNumber = ['1', '2', '3', '4', '5'];


    return (
        <div className='flex flex-col gap-4 p-5'>
            <div className='w-10 h-10 flex flex-col justify-center rounded-full bg-MediumBlue'>
                <img src={star} alt="Star" className='mx-auto' />
            </div>
            <div className=' text-White'>
                How did we do?
            </div>
            <div className=' text-MediumGrey'>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </div>
            <div>
                {
                    ratingNumber.map((numRating) => (
                        <span
                            key={numRating}
                            onClick={() => handleSelectedNumber(numRating)}

                        >
                            {numRating}
                        </span>
                    ))
                }
            </div>
            <button>Submit</button>
        </div>
    )
}

export default Rating