import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Weather from './Components/Weather';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Weather' element={<Weather></Weather>}></Route>
          </Routes>
        </Router>
        
      </div>
    )
  }
}

export default App
