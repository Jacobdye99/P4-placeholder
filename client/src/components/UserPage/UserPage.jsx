import { getUserReviews } from "../../services/reviews"
import { getOneUser } from "../../services/users"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import StarRating2 from "../StarRating/StarRating2"

export default function UserPage(props) {
    const [reviews, setReviews] = useState([])
    const [user, setUser] = useState([])
    const {id} = useParams()
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
                    <p>{review.review}</p>
                    <StarRating2 stars={review.stars} />
                </div>
            )
        })}

        
    </div>
  )
}
