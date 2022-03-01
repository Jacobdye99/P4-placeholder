import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneReview } from "../../services/reviews"

export default function ReviewDetails(props) {
    const [review, setReview] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const getReview = async (id) => {
            const res = await getOneReview(id)
            setReview(res)
        }
        getReview(id)
    }, [id])
    console.log(review)
  return (
    <div>
        <div>
            <h3>{review.user.username}</h3>
            <p>{review.review}</p>
            <img src={review.poster} alt={review.movie_name} />
        </div>
    </div>
  )
}
