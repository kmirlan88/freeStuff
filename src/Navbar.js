import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Navbar() {
	return (
		<div className="Navbar">
			<div className="ui secondary  menu">
				
					<Link to="/">Home</Link>
				
				
					<Link to="/getstuff">Get Free Stuff</Link>
				
				
					<Link to="/postStuff">Post Free Stuff</Link>
				

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
