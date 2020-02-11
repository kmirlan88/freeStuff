import React, { useState } from "react";


function Form() {
	const [state, setState] = React.useState({
		itemName: "",
		street: "",
		state: "",
		country: "",
		img: "",
		descr: ""
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
		<form onSubmit={getInputData}>
			<div className="ui form">
				<div className="field">
					<label>Item Name</label>
					<input
						type="text"
						name="itemName"
						placeholder="Item Name"
						value={state.itemName}
						onChange={handleChange}
					/>
				</div>
				<div className="three fields">
					<div className="field">
						<label>Street Address</label>
						<input
							type="text"
							placeholder="Street Address"
							name="street"
							value={state.street}
							onChange={handleChange}
						/>
					</div>
					<div className="field">
						<label>State</label>
						<input
							type="text"
							placeholder="State"
							name="state"
							value={state.state}
							onChange={handleChange}
						/>
					</div>
					<div className="field">
						<label>Country</label>
						<input
							type="text"
							placeholder="Country"
							name="country"
							value={state.country}
							onChange={handleChange}
						/>
					</div>
				</div>
				<img
					className="ui small rounded image"
					src="https://semantic-ui.com/images/wireframe/square-image.png"
					name="img"
					value={state.img}
					onChange={handleChange}></img>
				<div className="field">
					<label>Descripton:</label>
					<textarea
						name="descr"
						value={state.descr}
						onChange={handleChange}></textarea>
				</div>
				<button className="ui primary button" type="submit">
					Post
				</button>
			</div>
		</form>
	);
}

export default Form;
