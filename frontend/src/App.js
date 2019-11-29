import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
//Components
import Home from './components/homePage/index'
import Navigation from './components/navigation'
import CreateNote from './components/create-note'
import Notes from './components/notes'

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path='/'  exact component={Home}/>
      <Route path='/create-note' component={CreateNote}/>
      <Route path='/my-notes' component={Notes}/>
    </Router>
  );
}

export default App;
