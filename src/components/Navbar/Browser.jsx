import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import '../Navbar/navbar.css'

const Browser = () => {
  return (
    <Navbar className="navbar">
      <Link to="/">Home</Link> | <Link to="/favoritos">Favoritos</Link>
    </Navbar>
  )
}

export default Browser
