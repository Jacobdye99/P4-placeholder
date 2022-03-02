import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(props) {
  return (
    <div>
    <div className='Navbar'>
      <div className='logoImg'>
        <Link to={'/'} className="logoLink">
      <img src='https://github.com/Jacobdye99/Review.io/blob/main/Assets/clipart2676942.png?raw=true' alt='Review.io logo' className='logoImg'/>
      <h1 id='logoText'>Review.io</h1>
        </Link>
      </div>
        <Link to='/' id='navLink'>Movies</Link>
        <Link to='/reviews' id='navLink'>Review Feed</Link>
        {props.currentUser ? 
        <>
            <button onClick={props.logout} className="navButton">Log Out</button>
            {props.currentUser.image !== "" ? 
            <Link to={`/user/${props.currentUser.id}`}>
                <img src={props.currentUser.image} alt={props.currentUser.username} className='NavImg'/>
            </Link>
            : 
            <Link to={`/user/${props.currentUser.id}`}> 
                <img src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt={props.currentUser.username} className='NavImg'/>
            </Link>
        }
        </>
        :
        <>
            <Link to='/login' id='navLink'>Login</Link>
            <Link to='/register' id='navLink'>Register</Link>
        </>    
    }
    
    </div>
    </div>
  )
}
