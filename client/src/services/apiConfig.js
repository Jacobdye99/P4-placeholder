import axios from "axios";


const rubyUrl = process.env.NODE_ENV === 'production' ? /* link to your heroku app. Example:*/'https://reviewiop4.herokuapp.com/' : 'http://localhost:3000'

const omdbUrl = `http://www.omdbapi.com`

export const api = axios.create({
    baseURL: rubyUrl
})

export const movieApi = axios.create({
    baseURL: omdbUrl
})