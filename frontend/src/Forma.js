import React from "react";
import { Button, Form, Col, FormControl, FormGroup, Row, Modal } from "react-bootstrap";
import axios from "axios";
import { Redirect } from 'react-router-dom'


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
		axios
			.post("/poststuff", data)
			.then(res => {
				console.log(res)
				return <Redirect to='/getstuff' />
			})
			.catch(err => {
				// handle eror on front;
			});
	}

	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	return (
		<Form validated onSubmit={handlePost}>
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
						required
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
					required
				/>
			</FormGroup>

			<Button variant="primary" type="submit" onClick={handleShow}>
				Submit
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</Form>
	);
}

export default Forma;
