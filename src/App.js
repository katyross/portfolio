import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Projects from './projects.js';
import Cv from './cv.js';

function App() {
  return (
   <BrowserRouter>
    <div className="App">

      <Route path="/projects" component={Projects}/>
      <Route path="/cv" component={Cv}/>
      
      <div className="navigation">
        <img src={logo} className="logo-image" alt="Logo Image"/>
        <div className="navigation-sub">

          <Link to="/projects" className="item">Projects</Link>
          <Link to="/cv" className="item">CV</Link>

        </div>
      </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
