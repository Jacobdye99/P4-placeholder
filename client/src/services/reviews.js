import { api } from "./apiConfig";

export const getAllReviews = async () => {
    const res = await api.get('/reviews')
    return res.data
}

export const getOneReview = async (review_id) => {
    const res = await api.get(`/reviews/${review_id}`)
    return res.data
}

export const getUserReviews = async (user_id) => {
    const res = await api.get(`/users/${user_id}/reviews`)
    return res.data
}

export const createReview = async (reviewData) => {
    const res = await api.post(`/reviews`, {review: reviewData})
    return res.data
}

export const updateReview = async (review_id, reviewData) => {
    const res = await api.put(`/reviews/${review_id}`, {review: reviewData})
    return res.data
}

export const deleteReview = async (review_id) => {
    const res = await api.delete(`/reviews/${review_id}`)
    return res.data
}