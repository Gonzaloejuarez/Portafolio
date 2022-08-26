import React from 'react';
import Home from './components/home/Home.jsx'
import Projects from './components/home/Projects/Projects';
import Cover from './components/Fondo/Cover.jsx';
import {Route, Routes} from 'react-router'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
