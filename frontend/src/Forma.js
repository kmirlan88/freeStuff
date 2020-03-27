import React from "react";
import { Button, Form, Col, FormControl, FormGroup, Row, Modal, InputGroup } from "react-bootstrap";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


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
				console.log(res);
			})
			.catch(err => {
				// handle eror on front;
			});
	}

	const handleSubmit = (event) => {
		handlePost(event)
		handleShow()
	}

	const [show, setShow] = React.useState(false)
	
	const renderRedirect = () => {
		if (redirect){
			return <Redirect to="getstuff" />;
		}
	}

	const handleShow = () => setShow(true)

	const [redirect, setRedirect] = React.useState(false);
	const handleRedirect = () => setRedirect(true)

	return (
		<Form onSubmit={handleSubmit} className="mt-sm-5">
			<Form.Group controlId="itemName">
				<Form.Label>Item Name*</Form.Label>
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
					<Form.Label>Zip*</Form.Label>
					<Form.Control
						name="zip"
						value={state.zip}
						onChange={handleChange}
						placeholder="Zip"
						required
					/>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col}>
					<div className="custom-file">
						<Form.Control
							type="file"
							name="file"
							id="file"
							value={state.img}
							onChange={handleFileChange}
							required
							className="custom-file-input"
						/>
						<Form.Label className="custom-file-label" for="file">Choose Image*</Form.Label>
					</div>
				</Form.Group>
			</Form.Row>

			<FormGroup>
				<Form.Label>Descripton and contact info*</Form.Label>
				<FormControl
					as="textarea"
					aria-label="With textarea"
					name="descr"
					value={state.descr}
					onChange={handleChange}
					placeholder="Description and contact info..."
					required
				/>
			</FormGroup>

			<Button variant="info" type="submit" block size="lg">
				Submit
			</Button>

			<Modal show={show} backdrop="static" keyboard="false">
				<Modal.Header>
					<Modal.Title>
						<FontAwesomeIcon icon={faCheckCircle} size="lg" color="green" />
						Good job!
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>You posted free stuff!</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleRedirect}>
						OK
					</Button>
				</Modal.Footer>
			</Modal>
			{renderRedirect()}
		</Form>
	);
}

export default Forma;
