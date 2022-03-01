import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { deleteReview } from '../../services/reviews'
import { useNavigate } from 'react-router-dom'
import { getOneMovie } from '../../services/movies'

export default function Reviews(props) {
  const [movie, setMovie] = useState([])
  const navigate = useNavigate()
  
  return (
    <div>
        {props.reviews.map(review => {
          // {getMovies(review.movie_id)}
            return (
                <div key={review.id}>
            <Link to={`/user/${review.user.id}`}>
                <h3>{review.user.username}</h3>
            </Link>
            <Link to={`/reviews/${review.id}`}>
                <h4>{review.review}</h4>
            </Link>
                
                <img src={review.poster} alt={review.movie_name} />

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
