import React from 'react';
import './App.css';
import Home from './components/home/Home.jsx'
import Projects from './components/home/Projects/Projects';
import Nav from './components/NavBar/Nav';
import {Route, Routes} from 'react-router'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
