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
    <div>ReviewDetails</div>
  )
}
