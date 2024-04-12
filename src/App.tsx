import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

//import CardPage from './pages/CardPage'
import BookPage from './pages/BookPage'
import BookDetailsPage from './pages/BookDetailsPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/book-details/:id" element={<BookDetailsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
