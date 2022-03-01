import React, { useEffect, useState } from 'react'
import { Link, useParams, Routes, Route } from 'react-router-dom'
import { getOneMovie } from '../../services/movies'
import CreateReview from '../CreateReview/CreateReview'
import Popup from '../Popup.jsx/Popup'

export default function MovieDetails(props) {
    const [movie, setMovie] = useState([])
    const {id} = useParams()
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const res = await getOneMovie(id)
            console.log(res)
            setMovie(res)

        }
        fetchMovieDetails()
    }, [id])
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
