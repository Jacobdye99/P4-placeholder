import { useEffect, useState } from "react"
import {Routes, Route, useNavigate} from "react-router-dom"
import { getAllReviews, deleteReview, updateReview } from "../../services/reviews"
import Reviews from "./Reviews"
import EditReview from "../EditReview/EditReview"
import ReviewDetails from "../ReviewDetails/ReviewDetails"

export default function ReviewsContainer(props) {
    const [reviews, setReviews] = useState([])
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchReviews = async () => {
            const reviews = await getAllReviews()
            setReviews(reviews)
        }
        fetchReviews()
    }, [toggle])

    const handleDelete = async (id) => {
        await deleteReview(id)
        setToggle(prevToggle => !prevToggle)
        navigate('/reviews')
    }

    const handleEdit = async (id, data) => {
        await updateReview(id, data)
        setToggle(prevToggle => !prevToggle)
        navigate(`/reviews/${id}`)
    }
  return (
    <div>
        <Routes>
            <Route path="/" element={<Reviews 
            reviews={reviews}
            currentUser={props.currentUser}
            handleDelete={handleDelete}
            />} />
            <Route path='/:id/edit' element={<EditReview
            handleEdit={handleEdit}
            reviews={reviews}
            />} />
            <Route path='/:id' element={<ReviewDetails
            reviews={reviews}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            currentUser={props.currentUser}
            />} />
        </Routes>
    </div>
  )
}
