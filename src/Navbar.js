import React from 'react';


function Navbar() {
  return (
    <div className="Navbar">
      <div className="ui secondary  menu">
          <a className="item active" href="/">
            Home
          </a>
          <a className="item" href="/">
            Get Free Stuff
          </a>
          <a className="item" href="/">
            Post Free Stuff
          </a>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
            </div>
            <a className="ui item" href="/">
              Logout
            </a>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
