
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Popup from '../Popup.jsx/Popup'
import Comments from '../Comments/Comments'
import CreateComment from '../CreateComment/CreateComment'
import StarRating2 from '../StarRating/StarRating2'
import './Reviews.css'
export default function Reviews(props) {
  const navigate = useNavigate()
  const [trigger, setTrigger] = useState(false)
  const [trigger2, setTrigger2] = useState(false)
  
  return (
    <div align="center" className='fullReview'>
        {props.reviews.map(review => {
            return (
                <div key={review.id} className="eachReview">
            <div className='user'>
            <Link to={`/user/${review.user.id}`} className='reviewLinks'>
            {review.user?.image !== "" ? 
                    <>
                    <img src={review.user?.image} alt={review.user?.username} className='NavImg'/>
                    </>
                    :
                    <>
                    <img src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt={review.user?.username} className='NavImg'/>
                    </>
            }
                <h3>{review.user.username}</h3>
            </Link>
            </div>
                <div className='poster_stars'><img src={review.poster} alt={review.movie_name} className="posters"/>
                <StarRating2 stars={review.stars} />
                </div>
            <Link to={`/reviews/${review.id}`} className='reviewLinks'>
                <p className='review'>{review.review}</p>
            </Link>
                <div>
                <button onClick={(e) => setTrigger(!trigger)} className='buttons'>Show Comments</button>
                </div>
            <Popup trigger={trigger}>
                <Comments id={review.id} />
            </Popup>

            {
              props.currentUser?.id === review.user_id ?
              <div>
              <button onClick={() => props.handleDelete(review.id)} className='buttons'>
                Delete
              </button>
              <button onClick={() => navigate(`/reviews/${review.id}/edit`)} className='buttons'>
                Edit
              </button>
              </div>
              :
              null
            }

            {
              props.currentUser ?
              <div>
              <button onClick={(e) => setTrigger2(!trigger2)} className='buttons'>Create Comment</button>
            <Popup trigger={trigger2}>
                <CreateComment id={review.id} setTrigger={setTrigger} setTrigger2={setTrigger2}/>
            </Popup>
              </div>
              :
              null
            }
                
                </div>
        )})}
    </div>
  )
}
