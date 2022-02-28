import { movieApi } from "./apiConfig";

export const getMovies = async (search) => {
    const res = await movieApi.get(`?apikey=5ec465cd&s=${search}`)
    return res.data
}

export const getOneMovie = async (id) => {
    const res = await movieApi.get(`?apikey=5ec465cd&i=${id}`)
    return res.data
}