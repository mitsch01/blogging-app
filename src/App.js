import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import BlogGallery from "./components/BlogGallery"
import ContactForm from "./components/Contact"
import Footer from "./components/Footer"
import BlogPost from "./components/BlogPost"

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/blog-gallery' element={<BlogGallery />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/blog/:id' element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
