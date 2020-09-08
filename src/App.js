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

      
      <div className="navigation">
        <img src={logo} className="logo-image" alt="flower logo"/>

          <div className="navigation-sub">

          <Link to="/projects" className="item">Projects</Link>
          <Link to="/cv" className="item">CV</Link>

          </div>
        </div>
      </div>

      <Route path="/projects" component={Projects}/>
      <Route path="/cv" component={Cv}/>

   </BrowserRouter>
  );
}

export default App;
