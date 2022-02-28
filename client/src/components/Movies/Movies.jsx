import { getMovies } from '../../services/movies'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Movies() {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

  return (
    <div>
        <form onSubmit={async (e) => {
            e.preventDefault()
            const res = await getMovies(search)
            setMovies(res.Search)
            console.log(res.Search)
        }}>
        <input type='text' onChange={(e) => setSearch(e.target.value)} />
        <button>Search Movies</button>
        </form>
        
        {movies !== undefined ?
        <>
        {movies.map((movie) => {
            return (
                <div key={movie.imdbID}>
                    <Link to={`/movies/${movie.imdbID}`}>
                    <h4>{movie.Title}</h4>
                    <img src={movie.Poster} alt={movie.Title} />
                    </Link>
                </div>
            )
        })}
        </>
        :
        <>
        <h3>No Movies Found</h3>
        </>
        }
    </div>
  )
}
