import React from 'react'
import thankYouImg from '../assets/images/illustration-thank-you.svg'

const Greeting = ({ numberRating }) => {


    return (
        <div className='flex flex-col justify-center items-center gap-4 p-7 lg:p-10'>
            <div>
                <img src={thankYouImg} alt="Thank You Img" />
            </div>
            <div className='w-52 h-8 flex items-center justify-center rounded-full bg-MediumBlue mt-2'>
                {
                    <p className='text-Orange'>You selected {numberRating} out of 5</p>
                }
            </div>
            <div className='text-White font-Overpass font-bold text-2xl pt-3'>
                Thank you!
            </div>
            <div className='text-LightGrey font-Overpass text-[15px] text-sm text-center pb-5 lg:text-base'>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </div>
        </div>
    )
}

export default Greeting