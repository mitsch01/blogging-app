import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import BlogGallery from "./components/BlogGallery"
import ContactForm from "./components/Contact"
import Footer from "./components/Footer"
import BlogPost from "./BlogPost"

function App() {
  return (
    <Router>
      <Routes>
        <div className='App'>
          <NavBar />
          <Home />
          <Welcome />
          <BlogGallery />
          <ContactForm />
          <Footer />
        </div>
      </Routes>
    </Router>
  )
}

export default App
