import React, { useState } from "react";
import { Button, Form, Col, FormControl, FormGroup, Image } from "react-bootstrap";

function Forma() {
	const [state, setState] = React.useState({
		itemName: "",
		street: "",
		street2: "",
		state: "",
		city: "",
		img: "",
		descr: "",
		zip: ""
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value
		});
	}

	const getInputData = event => {
		event.preventDefault();
		console.log(state);
		// performSearch(event.target.value);
	};
	return (
		<Form onSubmit={getInputData}>
			<Form.Group controlId="itemName">
				<Form.Label>Item Name</Form.Label>
				<Form.Control
					name="itemName"
					placeholder="Item Name"
					value={state.itemName}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId="formGridAddress1">
				<Form.Label>Address</Form.Label>
				<Form.Control
					placeholder="1234 Main St"
					value={state.street}
					onChange={handleChange}
					name="street"
				/>
			</Form.Group>

			<Form.Group controlId="formGridAddress2">
				<Form.Label>Address 2</Form.Label>
				<Form.Control
					placeholder="Apartment, studio, or floor"
					value={state.street2}
					name="street2"
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Row>
				<Form.Group as={Col} controlId="formGridCity">
					<Form.Label>City</Form.Label>
					<Form.Control
						name="city"
						value={state.city}
						onChange={handleChange}
						placeholder="City"
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>State</Form.Label>
					<Form.Control
						name="state"
						value={state.state}
						onChange={handleChange}
						placeholder="State"
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Zip</Form.Label>
					<Form.Control
						name="zip"
						value={state.zip}
						onChange={handleChange}
						placeholder="Zip"
					/>
				</Form.Group>
			</Form.Row>

			<Image
				src="https://semantic-ui.com/images/wireframe/square-image.png"
				name="img"
				value={state.img}
				onChange={handleChange}
				alt="placeholder"
				rounded
				></Image>

			<FormGroup>
				<Form.Label>Descripton:</Form.Label>
				<FormControl
					as="textarea"
					aria-label="With textarea"
					name="descr"
					value={state.descr}
					onChange={handleChange}
					placeholder="Description..."
				/>
			</FormGroup>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default Forma;
