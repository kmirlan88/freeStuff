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
			.get("/getstufff")
			.then(res => {
				setState(res.data);
			})
			.catch(err => {
				console.log(err)
			});
	}

	useEffect(() => {
		data()
	}, [])
	
	console.log("this is Getstuff state:")
	console.log(state)

	let banana = state.map(obj => {
				
				return <Stuff data={obj} />
			})
	
	return (
		<div className="GetStuff">
			<Navigation />
			<Container fluid="md" className="mt-sm-5">
				<Row>
					<Col></Col>
					<Col>Free stuff</Col>
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
