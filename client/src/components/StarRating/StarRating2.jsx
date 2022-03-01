import { FaStar } from 'react-icons/fa'
import './starRating.css'
import { useState } from 'react';

export default function StarRating(props) {
    const [hover, setHover] = useState(null)
  return (
    <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return  <label key={i}>
                            <input type='radio' name="rating" value={ratingValue} id="stars" onClick={(e) => {
                              console.log(ratingValue)
                              props.setStars(e.target.value)}} />
                            <FaStar className='star' color={ratingValue <= ( hover || props.stars) ? "#ffc107" : "#e4e5e9"} size={50} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
                    </label>
        })}
    </div>
  )
}