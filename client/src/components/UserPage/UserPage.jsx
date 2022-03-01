import { getUserReviews } from "../../services/reviews"
import { getOneUser } from "../../services/users"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import StarRating2 from "../StarRating/StarRating2"
import Popup from "../Popup.jsx/Popup"
import Comments from "../Comments/Comments"
import CreateComment from "../CreateComment/CreateComment"

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
    <div>
        <h4>{user.username}</h4>
        <img src={user.image} alt={user.username} />

        {reviews.map((review) => {
            return (
                <div key={review.id}>
                    <img src={review.poster} alt={review.movie_name} />
                    <p>{review.review}</p>
                    <StarRating2 stars={review.stars} />
                    <button onClick={(e) => setTrigger(!trigger)}>Show Comments</button>
            <Popup trigger={trigger}>
                <Comments id={review.id} />
            </Popup>
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
                
            )
        })}
        

        
    </div>
    )
}
