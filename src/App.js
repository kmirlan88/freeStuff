import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="ui secondary  menu">
          <a class="item active">
            Home
          </a>
          <a class="item">
            Get Free Stuff
          </a>
          <a class="item">
            Post Free Stuff
          </a>
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="Search..." />
                <i class="search link icon"></i>
              </div>
            </div>
            <a class="ui item">
              Logout
            </a>
          </div>
      </div>
    </div>
  );
}

export default App;
