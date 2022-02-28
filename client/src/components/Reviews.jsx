import React from 'react'
import { Link } from 'react-router-dom'

export default function Reviews(props) {
  return (
    <div>
        {props.reviews.map(review => {
            return (
                <div>
                <h3>{review.user.username}</h3>
            <Link key={review.id} to={`/reviews/${review.id}`}>
                <h4>{review.review}</h4>
            </Link>
                <h5>{review.likes}</h5>
                
                </div>
        )})}
    </div>
  )
}
