import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import NavbarComponent from './components/NavbarComponent'

//Pages
import HomePage from './pages/HomePage'

export const App = () => {
  return (
  <div>
  <NavbarComponent />
   <Router>
      <Routes>
        <Route path='/' Component={HomePage}/>
      </Routes>
   </Router>
  </div>
  )
}

export default App