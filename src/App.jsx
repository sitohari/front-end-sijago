import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

//Pages
import HomePage from './pages/HomePage'

export const App = () => {
  return (
  <>
  <NavbarComponent />
   <Router>
      <Routes>
        <Route path='/' Component={HomePage}/>
      </Routes>
   </Router>
   <FooterComponent />
  </>
  )
}

export default App