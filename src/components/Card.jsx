import React, { useState } from 'react'
import Rating from './Rating';
import Greeting from './Greeting';
import Attribution from './Attribution';

const Card = () => {

    const [selectedRating, setSelectedRating] = useState(null)

    const handleRatingSubmit = (selectedRatingNumber) => {
        setSelectedRating(selectedRatingNumber);
    }

    return (
        <section className='w-full min-w-full min-h-screen bg-VeryDarkBlue flex flex-col items-center justify-center'>
            <div className='w-[340px] min-h-[375px] bg-DarkBlue mx-auto rounded-xl lg:w-[440px] lg:min-h-[388px]'>
                {
                    selectedRating === null ?
                        (
                            <Rating
                                onRatingSubmit={handleRatingSubmit}
                            />
                        ) : (
                            <Greeting
                                numberRating={selectedRating}
                            />
                        )
                }

            </div>
            <div className=''>
                <Attribution />
            </div>
        </section>
    )
}

export default Card
