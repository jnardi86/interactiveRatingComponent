import React, { useState } from 'react'
import Rating from './Rating';
import Greeting from './Greeting';
import Attribution from './Attribution';

const Card = () => {

    const [numRating, setNumRating] = useState(null)

    const handleRatingSubmit = (selectedNumber) => {
        setNumRating(selectedNumber);
    }

    return (
        <section className='w-full min-w-full min-h-screen bg-VeryDarkBlue flex flex-col items-center justify-center'>
            <div className='w-80 min-h-80 bg-DarkBlue mx-auto rounded-lg'>
                {
                    numRating === null ?
                        (
                            <Rating
                                onRatingSubmit={handleRatingSubmit}
                            />
                        ) : (
                            <Greeting
                                numberRating={numRating}
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
