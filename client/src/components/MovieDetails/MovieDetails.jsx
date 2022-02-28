import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneMovie } from '../../services/movies'

export default function MovieDetails(props) {
    const [movie, setMovie] = useState([])
    const {id} = useParams()

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
        <button>Create Review</button>
        <button>Add to Favorites</button>
        </>
        :
        <>
        null
        </>
        }
    </div>
  )
}
