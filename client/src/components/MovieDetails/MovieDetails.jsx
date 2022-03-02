import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneMovie } from '../../services/movies'
import CreateReview from '../CreateReview/CreateReview'
import Popup from '../Popup.jsx/Popup'
import { getAllReviews } from '../../services/reviews'
import StarRating2 from '../StarRating/StarRating2'
import './MovieDetails.css'

export default function MovieDetails(props) {
    const [movie, setMovie] = useState([])
    const {id} = useParams()
    const [trigger, setTrigger] = useState(false)
    const [reviews, setReviews] = useState([])
    let sum = 0
    let totalReviews = []

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const res = await getOneMovie(id)
            // console.log(res)
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
    
    const addAllStars = () => {
        // eslint-disable-next-line array-callback-return
        reviews?.map((review) => {
            if (review?.movie_id === movie?.imdbID) {
            totalReviews.push(review?.stars)
            
            }
        })
        // eslint-disable-next-line array-callback-return
        totalReviews.map((review) => {
            sum += review/totalReviews.length
        })
    }
    addAllStars()

    console.log(Math.round(sum))
    console.log(totalReviews)
    // console.log(reviews.length)
    // console.log(reviews?.length)
    // console.log(movie)
  return (
    <div align='center' className='movieDeetz'>
        <img src={movie.Poster} alt={movie.Title} id='movie_poster'/>
        <br />
        <h2>{movie.Title} ({movie.Year})</h2>
        <br />
        <p className='plot'>
            {movie.Plot}
        </p>
        <div>
        <StarRating2 stars={Math.round(sum)} />
        </div>

        {props.currentUser ? 
        <>
        <button onClick={(e) => setTrigger(!trigger)}>Create Review</button>
        <br />
        {/* <button >Add to Favorites</button> */}
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
