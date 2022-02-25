import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/Pages/Homepage'
import About from './components/Pages/About'

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}