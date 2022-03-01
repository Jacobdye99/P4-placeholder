import { useState } from "react"
import { createComment } from "../../services/comments"

export default function CreateComment(props) {
    const comment = {
        content: ""
    }
    const [data, setData] = useState(comment)

    const handleCreate = async (e, id, data) => {
        e.preventDefault();
        await createComment(id, data)
        props.setTrigger(true)
        props.setTrigger2(false)
    }

    const handleTextInput = (e) => {
        e.preventDefault()
        const {id, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value
        }))
        console.log(data)
      }
  return (
    <form onSubmit={(e) => handleCreate(e, props.id, data)}>
        <textarea type="text" id='content' onChange={handleTextInput} />
        <button type="submit">Post Comment</button>
    </form>
  )
}
