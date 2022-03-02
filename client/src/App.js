import './App.css';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/users';
import { Routes, Route } from 'react-router-dom'
import ReviewsContainer from './components/Reviews/ReviewsContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Footer from './components/Footer/Footer';
import UserPage from './components/UserPage/UserPage';

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
    <Route path='/' element={<Movies />} />
    <Route path='/reviews/*' element={<ReviewsContainer currentUser={currentUser} />} />
    <Route path='/movies/:id' element={<MovieDetails currentUser={currentUser} />} />
    <Route path='/register' element={<Register setCurrentUser={setCurrentUser} />} />
    <Route path='/user/:id' element={<UserPage currentUser={currentUser} />} />
    <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />
    </Routes>  
    <Footer  logout={logout}/>
    </div>
  );
}

export default App;
