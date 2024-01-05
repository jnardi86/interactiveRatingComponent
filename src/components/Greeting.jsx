import React from 'react'

const Greeting = ({numberRating, setNumRating}) => {

 const handleClick = () => {
    setNumRating(null);
 }


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
        <div>
            <button onClick={handleClick}>Return</button>
        </div>
    </div>
  )
}

export default Greeting