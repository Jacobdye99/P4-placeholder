import { getUserReviews } from "../../services/reviews"
import { getOneUser } from "../../services/users"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import StarRating2 from "../StarRating/StarRating2"
import Popup from "../Popup.jsx/Popup"
import Comments from "../Comments/Comments"
import CreateComment from "../CreateComment/CreateComment"
import './UserPage.css'

export default function UserPage(props) {
    const [reviews, setReviews] = useState([])
    const [user, setUser] = useState([])
    const {id} = useParams()
    const [trigger, setTrigger] = useState(false)
    const [trigger2, setTrigger2] = useState(false)
    const navigate = useNavigate()
    // console.log(id)

    useEffect(() => {
        const getUser = async (id) => {
            const res = await getOneUser(id)
            // console.log(res)
            setUser(res)
        }
        getUser(id)
        const getReviews = async (id) => {
            const res = await getUserReviews(id)
            // console.log(res)
            setReviews(res)
        }
        getReviews(id)
    }, [id])
    return (
    <div align="center" className='fullReview'>
        <div className="UserForm">
        {user.image !== "" ? 
                    <>
                    <img src={user.image} alt={user.username} className='UserImg'/>
                    </>
                    :
                    <>
                    <img src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt={user.username} className='UserImg'/>
                    </>
            }
        <h2 className="Username">{user.username}</h2>
        </div>
        {reviews.map((review) => {
            return (
                <div key={review.id} className="eachReview">
                    <p className='review'>{review.review}</p>
                    <div className='poster_stars'><img src={review.poster} alt={review.movie_name} className="posters"/>
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
        })}
        

        
    </div>
    )
}
