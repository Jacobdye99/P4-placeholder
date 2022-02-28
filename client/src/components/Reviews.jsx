import React from 'react'
import { Link } from 'react-router-dom'

export default function Reviews(props) {
  return (
    <div>
        {props.reviews.map(review => {
            return (
            <Link key={review.id} to={`/reviews/${review.id}`}>
                <h3>{review.user.username}</h3>
                <h4>{review.review}</h4>
            </Link>
        )})}
    </div>
  )
}
