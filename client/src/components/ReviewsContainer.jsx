import { useEffect, useState } from "react"
import {Routes, Route, useNavigate} from "react-router-dom"
import { getAllReviews, deleteReview, createReview, updateReview } from "../services/reviews"

export default function ReviewsContainer() {
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

    const handleCreate = async (data) => {
        await createReview(data)
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
            
        </Routes>
    </div>
  )
}
