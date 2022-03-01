
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Popup from '../Popup.jsx/Popup'
import Comments from '../Comments/Comments'
import CreateComment from '../CreateComment/CreateComment'
export default function Reviews(props) {
  const navigate = useNavigate()
  const [trigger, setTrigger] = useState(false)
  const [trigger2, setTrigger2] = useState(false)
  
  return (
    <div>
        {props.reviews.map(review => {
            return (
                <div key={review.id}>
            <Link to={`/user/${review.user.id}`}>
                <h3>{review.user.username}</h3>
            </Link>
            <Link to={`/reviews/${review.id}`}>
                <h4>{review.review}</h4>
            </Link>
                <button onClick={(e) => setTrigger(!trigger)}>Show Comments</button>
            <Popup trigger={trigger}>
                <Comments id={review.id} />
            </Popup>
                
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

            {
              props.currentUser ?
              <>
              <button onClick={(e) => setTrigger2(!trigger2)}>Create Comment</button>
            <Popup trigger={trigger2}>
                <CreateComment id={review.id} setTrigger={setTrigger} setTrigger2={setTrigger2}/>
            </Popup>
              </>
              :
              null
            }
                
                </div>
        )})}
    </div>
  )
}
