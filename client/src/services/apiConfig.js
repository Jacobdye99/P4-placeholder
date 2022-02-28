import axios from "axios";
const KEY = process.env.KEY

const rubyUrl = 'http://localhost:3000'

const omdbUrl = `http://www.omdbapi.com`

export const api = axios.create({
    baseURL: rubyUrl
})

export const movieApi = axios.create({
    baseURL: omdbUrl
})