import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Router} from 'react-router-dom'

const App = () => (
  <div>
    <Navigation />
    {/* Home Router */}
    <Router exact path='/'>
      <Home />
    </Router>

    {/* About Router */}
    <Router path='/about'>
      <About />
    </Router>

    {/* Contact Router */}
    <Router path='/contact'>
      <Contact />
    </Router>
  </div>
);

export default App;
