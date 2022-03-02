import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { getOneReview } from "../../services/reviews"
import Popup from "../Popup.jsx/Popup"
import Comments from "../Comments/Comments"
import CreateComment from '../CreateComment/CreateComment'
import StarRating2 from "../StarRating/StarRating2"

export default function ReviewDetails(props) {
    const [review, setReview] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    const [trigger, setTrigger] = useState(false)
    const [trigger2, setTrigger2] = useState(false)

    useEffect(() => {
        const getReview = async (id) => {
            const res = await getOneReview(id)
            setReview(res)
        }
        getReview(id)
    }, [id])
    // console.log(review)

    if (review.user?.username === undefined) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }
    else {
  return (
    <div align="center" className='fullReview'>
        <div className="eachReview">
            <div className="user">
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
            <h3>{review.user?.username}</h3>
            </Link>
            </div>
            <p className='review'>{review.review}</p>
            <img src={review.poster} alt={review.movie_name} className="posters"/>
            <StarRating2 stars={review.stars} />
        </div>
        <button onClick={(e) => setTrigger(!trigger)} className='buttons'>Show Comments</button>
            <Popup trigger={trigger}>
                <Comments id={review.id} />
            </Popup>
        {
              props.currentUser?.id === review.user_id ?
              <>
              <button onClick={() => props.handleDelete(review.id)} className='buttons'>
                Delete
              </button>
              <button onClick={() => navigate(`/reviews/${review.id}/edit`)} className='buttons'>
                Edit
              </button>
              </>
              :
              null
            }
            {
              props.currentUser ?
              <>
              <button onClick={(e) => setTrigger2(!trigger2)} className='buttons'>Create Comment</button>
            <Popup trigger={trigger2}>
                <CreateComment id={review.id} setTrigger={setTrigger} setTrigger2={setTrigger2}/>
            </Popup>
              </>
              :
              null
            }
    </div>
  )
    }
}

