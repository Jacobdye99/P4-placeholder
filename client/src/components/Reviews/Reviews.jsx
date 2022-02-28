import React from 'react'
import { Link } from 'react-router-dom'
// import { deleteReview } from '../../services/reviews'

export default function Reviews(props) {
  return (
    <div>
        {props.reviews.map(review => {
            return (
                <div key={review.id}>
                <h3>{review.user.username}</h3>
            <Link to={`/reviews/${review.id}`}>
                <h4>{review.review}</h4>
            </Link>
                <h5>{review.likes}</h5>

            {
              props.currentUser?.id === review.user_id ?
              <>
              <button onClick={() => props.handleDelete(review.id)}>
                Delete
              </button>
              </>
              :
              null
            }
                
                </div>
        )})}
    </div>
  )
}
