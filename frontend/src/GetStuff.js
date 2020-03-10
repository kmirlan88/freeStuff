import React, {useState, useEffect} from "react";
import Navigation from "./Navigation";
import axios from "axios";
import Stuff from "./Stuff";
import {
	Jumbotron,
	Container,
	Col,
	FormControl,
	FormGroup,
	Image,
	Row
} from "react-bootstrap";

function GetStuff() {
	let [state, setState] = useState([])
	
	const data = () => {
		axios
			.get("/getstuff")
			.then(res => {
				setState(res.data);
			})
			.catch(err => {
				//
			});
	}

	useEffect(() => {
		data()
	}, [])
	
	console.log("this is state:")
	console.log(state)

	let banana = state.map(obj => {
				return <Stuff data={obj} />
			})
	
	return (
		<div className="GetStuff">
			<Navigation />
			<Container fluid="md">
				<Row>
					<Col></Col>
					<Col>Free Items</Col>
					<Col></Col>
				</Row>
				<Row>
					<Col></Col>
					<Col>{banana}</Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	);
}

export default GetStuff;
