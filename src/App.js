import React from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import BlogGallery from "./components/BlogGallery"
import ContactForm from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home /> 
      <Welcome />
      <BlogGallery />
      <ContactForm />
      <Footer />
    </div>
  )
}


export default App
