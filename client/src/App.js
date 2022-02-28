import './App.css';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/users';
import { Routes, Route } from 'react-router-dom'
import ReviewsContainer from './components/ReviewsContainer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
  }

  return (
    <div className="App">
    <Navbar currentUser={currentUser} logout={logout}/>
    <Routes>
    <Route path='/' element={<h1>Hello</h1>} />
    <Route path='/reviews/*' element={<ReviewsContainer currentUser={currentUser} />} />
    {/* <Route path='/movies/:id' element={<h1>MovieDetails</h1>} /> */}
    <Route path='/register' element={<Register setCurrentUser={setCurrentUser} />} />
    <Route path='/user/:id' element={<h1>Movies</h1>} />
    <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />
    </Routes>  
    </div>
  );
}

export default App;
