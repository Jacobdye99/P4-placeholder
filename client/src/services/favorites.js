import { api } from "./apiConfig";

export const getUserFavorites = async (user_id) => {
    const res = await api.get(`/users/${user_id}/favorites`)
    return res.data
}

export const createFavorite = async (user_id, favoriteData) => {
    const res = await api.post(`/users/${user_id}/favorites`, {favorite: favoriteData})
    return res.data
}

export const deleteFavorite = async (user_id, favorite_id) => {
    const res = await api.delete(`/users/${user_id}/favorites/${favorite_id}`)
    return res.data
}