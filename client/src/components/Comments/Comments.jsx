import { getReviewComments } from "../../services/comments"
import { useEffect, useState } from "react"

export default function Comments(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async (id) => {
            const res = await getReviewComments(id)
            setComments(res)
            console.log(res)
        }
        getComments(props.id)
    }, [props.id])
  return (
    <div>
        {comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <img src={comment.user?.image} alt={comment.user?.username}/>
                    <h4>{comment.user?.username}:</h4>
                    <p>{comment.content}</p>
                </div>    
            )
        })}
    </div>
  )
}
