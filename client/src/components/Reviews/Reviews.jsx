import React from 'react'
import { Link } from 'react-router-dom'
// import { deleteReview } from '../../services/reviews'
import { useNavigate } from 'react-router-dom'

export default function Reviews(props) {
  const navigate = useNavigate()
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
              <button onClick={() => navigate(`/reviews/${review.id}/edit`)}>
                Edit
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
