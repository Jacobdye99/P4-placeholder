import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getOneReview } from "../../services/reviews"

export default function ReviewDetails(props) {
    const [review, setReview] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getReview = async (id) => {
            const res = await getOneReview(id)
            setReview(res)
        }
        getReview(id)
    }, [id])
    console.log(review)

    if (review.user?.username === undefined) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }
    else {
  return (
    <div>
        <div>
            <h3>{review.user?.username}</h3>
            <p>{review.review}</p>
            <img src={review.poster} alt={review.movie_name} />
        </div>
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
  )
    }
}

