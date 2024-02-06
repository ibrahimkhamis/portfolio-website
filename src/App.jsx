import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './_components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from './_components/About'
import { Contacts } from './_components/Contacts'

function App() {

  return (

    <Router>
      <Routes>

      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/contacts' element={<Contacts />} />

      </Routes>

    </Router>
  )
}

export default App
