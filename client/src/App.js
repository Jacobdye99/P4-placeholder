import './App.css';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/users';
import { Routes, Route } from 'react-router-dom'
import ReviewsContainer from './components/ReviewsContainer';

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
    
    <Routes>
    <Route path='/' element={<h1>Hello</h1>} />
    <Route path='/reviews/*' element={<h1>Reviews</h1>} />
    <Route path='/movies/:id' element={<h1>MovieDetails</h1>} />
    <Route path='/user/:id' element={<ReviewsContainer currentUser={currentUser} />} />
    </Routes>  
    </div>
  );
}

export default App;
