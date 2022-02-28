import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StarRating2 from '../StarRating/StarRating'

export default function EditReview(props) {

    const [review, setReview] = useState('')
    const [stars, setStars] = useState(0)
    const [likes, setLikes] = useState(0)
    const [movieId, setMovieId] = useState("")
    const [data, setData] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        const foundReview = props.reviews.find((review) => {
            return review.id === parseInt(id)
        })
        if (foundReview) {
            setReview(foundReview.review)
            setStars(foundReview.stars)
            setLikes(foundReview.likes)
            setMovieId(foundReview.movie_id)
            setData(foundReview)
        }
       
    }, [id, props.reviews])

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        const newReview = {
            review,
            stars,
            likes,
            movieId
        }
        navigate('/reviews')
        props.handleEdit(id, newReview)
    }}>
      <textarea type='text' id='review' onChange={(e) => setReview(e.target.value)}  />
      <StarRating2 stars={stars} setStars={setStars}/>
      <button type='submit'>Edit</button>
    </form>
  )
}
