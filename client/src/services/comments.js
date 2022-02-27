import { api } from "./apiConfig";

export const getReviewComments = async (review_id) => {
    const res = await api.get(`/reviews/${review_id}/comments`)
    return res.data
}

export const createComment = async (review_id, commentData) => {
    const res = await api.post(`/reviews/${review_id}/comments`, {comment: commentData})
    return res.data
}

export const updateComment = async (review_id, comment_id, commentData) => {
    const res = await api.put(`/reviews/${review_id}/comments/${comment_id}`, {comment: commentData})
    return res.data
}

export const deleteComment = async (review_id, comment_id) => {
    const res = await api.delete(`/reviews/${review_id}/comments/${comment_id}`)
    return res.data
}