import { getMovies } from '../../services/movies'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'

export default function Movies() {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

  return (
    <div align="center" className='fullForm'>
        <div className='fullSearch'>
        <h2 id='text'>Search for your favorite movie, game, or show</h2>
        <form className='movieSearch' onSubmit={async (e) => {
            e.preventDefault()
            const res = await getMovies(search)
            setMovies(res.Search)
            // console.log(res.Search)
        }}>
        <input type='text' onChange={(e) => setSearch(e.target.value)} id="movie_input"/>
        <button id='movie_button'>Search Movies</button>
        </form>
        </div>
        <div align="center" id='scroll'>
        {movies !== undefined ?
        <>
        {movies.map((movie) => {
            return (
                <div key={movie.imdbID} className="movies">
                    <Link to={`/movies/${movie.imdbID}`}>
                    {/* <h4>{movie.Title}</h4> */}
                    <img src={movie.Poster} alt={movie.Title} className="MoviePoster" />
                    </Link>
                </div>
            )
        })}
        </>
        :
        <>
        <h3>No Media Found</h3>
        </>
        }
        </div>
    </div>
  )
}
