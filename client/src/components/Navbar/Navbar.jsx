import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(props) {
  return (
    <div>
        <Link to='/'>Home</Link>
        {props.currentUser ? 
        <>

            {props.currentUser.image !== null ? <Link to={`/user/${props.currentUser.id}`}><img src={props.currentUser.image} alt={props.currentUser.username} className='NavImg'/></Link>
            : <Link to={`/user/${props.currentUser.id}`}> <img src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt={props.currentUser.username} className='NavImg'/> </Link>
        }
            
            <button onClick={props.logout}>Log Out</button>
        </>
        :
        <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </>    
    }
    <Link to='/reviews'>Review Feed</Link>
    </div>
  )
}
