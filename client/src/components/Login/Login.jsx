import { useState } from "react"
import { loginUser } from "../../services/users"
import { useNavigate } from "react-router-dom"
import './Login.css'

export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

  return (
    <div align="center" className="loginForm">
    <form onSubmit={async (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }
        const res = await loginUser(user)
        props.setCurrentUser(res)

        navigate('/')
    }} className="Form">
      <fieldset id="border">
        <legend id="legend">Login</legend>
        <input type='text' onChange={(e) => setUsername(e.target.value) } value={username} className="Inputs" placeholder="Username"/>
        <input type='password' onChange={(e) => setPassword(e.target.value) } value={password} className="Inputs" placeholder="Password"/>
        <button className="button">Login</button>
        </fieldset>
    </form>
    </div>
  )
}
