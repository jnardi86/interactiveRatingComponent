import React from 'react'

const Greeting = ({numberRating}) => {
  return (
    <div>
        <div>
            imagen
        </div>
        <div>
            {
                <p>You selected {numberRating} out of 5</p>   
            }
        </div>
        <div>
            Thank you!
        </div>
        <div>
            text
        </div>
    </div>
  )
}

export default Greeting