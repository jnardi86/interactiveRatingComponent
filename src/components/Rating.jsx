import React from 'react'
import star from '../assets/images/icon-star.svg'

const Rating = ({ onRatingSubmit }) => {

    const handleSelectedNumber = (numRating) => {
        onRatingSubmit(numRating)
    }

    const ratingNumber = ['1', '2', '3', '4', '5'];


    return (
        <div className='flex flex-col gap-4 p-5'>
            <div className='w-10 h-10 rounded-full bg-DarkBlueOpacity flex items-center justify-center'>
                <img src={star} alt="Star" className='mx-auto' />
            </div>
            <div>
                How did we do?
            </div>
            <div>
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