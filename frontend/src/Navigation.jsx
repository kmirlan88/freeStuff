import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, FormControl, Button, Form, Row, Col } from "react-bootstrap";

function Navigation() {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Nav className="mr-auto">
					<Navbar.Brand href="https://free-stuff.herokuapp.com/">
						FreeStuff
					</Navbar.Brand>
					<Nav.Link href="/getstuff">Get Free </Nav.Link>
					<Nav.Link href="/postStuff">Post Free </Nav.Link>
				</Nav>
				<Form className="w-75" inline>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2 w-75"
					/>
					<Button variant="outline-light">Search</Button>
				</Form>
				<Button variant="outline-info" className="mr-sm-3">
					Login
				</Button>
				<Button variant="info" className="mr-sm-5">Signup</Button>
			</Navbar>
		</div>
	);
}

export default Navigation;
