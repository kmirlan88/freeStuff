import React from "react";
import Navigation from "./Navigation";
import Form from "./Forma";
import { Container, Row, Col } from "react-bootstrap";

function PostStuff() {
	return (
		<div className="PostStuff">
			<Navigation />
			<Container fluid="md">
				<Row>
					<Col></Col>
					<Col>
						<Form />
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	);
}

export default PostStuff;
