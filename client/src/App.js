import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<h1>Hello</h1>} />
    <Route path='/reviews' element={<h1>Reviews</h1>} />
    <Route path='/movies/:id' element={<h1>MovieDetails</h1>} />
    </Routes>  
    </div>
  );
}

export default App;
