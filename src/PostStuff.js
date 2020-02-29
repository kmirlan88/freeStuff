import React from "react";
import Navigation from "./Navigation";
import Form from "./Forma";
import { Container } from "react-bootstrap";

function PostStuff() {
	return (
		<div className="PostStuff">
			<Navigation />
			<Container fluid="md">
				<Form />
			</Container>
		</div>
	);
}

export default PostStuff;
