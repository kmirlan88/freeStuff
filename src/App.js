import React from 'react';
import Navbar from './Navbar'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import PostStuff from './PostStuff'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Navbar} />
        <Route path="/poststuff" component={PostStuff} />
      </div>
    </Router>
    
  );
}

export default App;
