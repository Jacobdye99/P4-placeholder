import { getReviewComments } from "../../services/comments"
import { useEffect, useState } from "react"
import './Comments.css'

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
                <div key={comment.id} className="commentDiv">
                    {comment.user?.image !== "" ? 
                    <>
                    <img src={comment.user?.image} alt={comment.user?.username} className='NavImg'/>
                    </>
                    :
                    <>
                    <img src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt={comment.user?.username} className='NavImg'/>
                    </>
            }
                <div className="comment">
                    <h4>{comment.user?.username}:</h4>
                    <p>{comment.content}</p>
                </div>
                </div>    
            )
        })}
    </div>
  )
}
