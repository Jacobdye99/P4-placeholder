import { useState } from "react"
import { registerUser } from "../../services/users"
import { useNavigate } from "react-router-dom"


export default function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')

    const navigate = useNavigate()


  return (
    <div align="center">
    <form onSubmit={async (e) => {
        e.preventDefault()
        const user = {
            username,
            password,
            email,
            image
        }
        const res = await registerUser(user)
        props.setCurrentUser(res)

        navigate('/')
    }} className="Form">
      <fieldset id="border">
      <legend id="legend">Register</legend>
        <input type='text' onChange={(e) => setUsername(e.target.value) } value={username} placeholder="Username" className="Inputs" />
        <input type='text' onChange={(e) => setEmail(e.target.value) } value={email} placeholder='Email' className="Inputs" />
        <input type='password' onChange={(e) => setPassword(e.target.value) } value={password} placeholder='Password' className="Inputs" />
        <input type='text' onChange={(e) => setImage(e.target.value) } value={image} placeholder="Image Url" className="Inputs" />
        <button className="button">Register User</button>
        </fieldset>
    </form>
    </div>
  )
}
