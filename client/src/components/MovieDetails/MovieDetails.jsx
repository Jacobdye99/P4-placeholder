import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneMovie } from '../../services/movies'
import CreateReview from '../CreateReview/CreateReview'
import Popup from '../Popup.jsx/Popup'
import { getAllReviews } from '../../services/reviews'

export default function MovieDetails(props) {
    const [movie, setMovie] = useState([])
    const {id} = useParams()
    const [trigger, setTrigger] = useState(false)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const res = await getOneMovie(id)
            console.log(res)
            setMovie(res)

        }
        fetchMovieDetails()
        const fetchReviews = async () => {
            const res = await getAllReviews()
            // console.log(res)
            setReviews(res)
        }
        fetchReviews()
    }, [id])


    console.log(reviews.length)
    // console.log(movie)
  return (
    <div>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title} ({movie.Year})</h2>

        {props.currentUser ? 
        <>
        <button onClick={(e) => setTrigger(!trigger)}>Create Review</button>
        <button >Add to Favorites</button>
        <Popup trigger={trigger}>
            <CreateReview movieId={movie.imdbID} movieName={movie.Title} poster={movie.Poster} />
        </Popup>
        </>
        :
        <>
        Sign in to leave a review!
        </>
        }
        
    </div>
  )
}
