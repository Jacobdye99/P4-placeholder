import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StarRating from '../StarRating/StarRating'

export default function EditReview(props) {

    // const [review, setReview] = useState('')
    const [stars, setStars] = useState(0)
    // const [likes, setLikes] = useState(0)
    const [movieId, setMovieId] = useState("")
    const review = {
        review: "",
        likes: 0,
        stars: 0,
        // eslint-disable-next-line no-use-before-define
        movie_id: {movieId}
      }
    const [data, setData] = useState(review)
    const {id} = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        const foundReview = props.reviews.find((review) => {
            return review.id === parseInt(id)
        })
        if (foundReview) {
            // setReview(foundReview.review)
            setStars(foundReview.stars)
            // setLikes(foundReview.likes)
            setMovieId(foundReview.movie_id)
            setData(foundReview)
        }
       
    }, [id, props.reviews])
    const handleTextInput = (e) => {
        e.preventDefault()
        const {id, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value
        }))
        console.log(data)
      }
      console.log(data.movie_id)

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        // const newReview = {
        //     review,
        //     stars,
        //     likes,
        //     movieId
        // }
        // navigate('/reviews')
        props.handleEdit(id, data)
        console.log(stars)
    }}>
      <textarea type='text' id='review' onChange={handleTextInput}  />
      <StarRating handleTextInput={handleTextInput} stars={data.stars}/>
      <button type='submit'>Post</button>
    </form>
  )
}
