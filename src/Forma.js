import React from "react";
import { Button, Form, Col, FormControl, FormGroup, Row, Container } from "react-bootstrap";
import axios from "axios";


function Forma() {
	const [state, setState] = React.useState({
		itemName: null,
		street: null,
		street2: null,
		state: null,
		city: null,
		img: null,
		descr: null,
		zip: null,
		file: null
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value
		});
	}

	function handleFileChange(evt) {
		const value = evt.target.files[0];
		setState({
			...state,
			file: value
		});
	}

	function handlePost(event) {
		event.preventDefault();
		console.log(state)
		const data = new FormData()
		for (const [key, value] of Object.entries(state)){
			data.append(key, value)
		}
		axios.post("http://localhost:3001/poststuff", data)
			.then(res => {
				window.location = "/getstuff";
			})
			.catch(err => {
				// handle eror on front;
			});
	}
	
	return (
		<Form onSubmit={handlePost}>
			<Form.Group controlId="itemName">
				<Form.Label>Item Name</Form.Label>
				<Form.Control
					required
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
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>Choose File</Form.Label>
					<Form.Control
						type="file"
						name="file"
						id="file"
						value={state.img}
						onChange={handleFileChange}
					/>
				</Form.Group>
			</Form.Row>

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
