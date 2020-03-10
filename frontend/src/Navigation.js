import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand>
					<Link to="/">freeStuff</Link>
				</Navbar.Brand>
				<Nav.Link>
					<Link to="/getstuff">Get Free Stuff</Link>
				</Nav.Link>
				<Nav.Link>
					<Link to="/postStuff">Post Free Stuff</Link>
				</Nav.Link>
			</Navbar>
		</div>
	);
}

export default Navigation;
