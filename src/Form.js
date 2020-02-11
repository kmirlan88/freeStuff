import React from "react";


const getInputData = event => {
	event.preventDefault();
	console.log(event.target);
	// performSearch(event.target.value);
};

function Form() {
	return (
		<form onSubmit={getInputData}>
			<div className="ui form">
				<div className="field">
					<label>Item Name</label>
					<input type="text" name="first-name" placeholder="Item Name" />
				</div>
				<div className="three fields">
					<div className="field">
						<label>Street Address</label>
						<input type="text" placeholder="Street Address" />
					</div>
					<div className="field">
						<label>State</label>
						<input type="text" placeholder="State" />
					</div>
					<div className="field">
						<label>Country</label>
						<input type="text" placeholder="Country" />
					</div>
				</div>
				<img
					className="ui small rounded image"
					src="https://semantic-ui.com/images/wireframe/square-image.png"></img>
				<div className="field">
					<label>Descripton:</label>
					<textarea></textarea>
				</div>
				<button className="ui primary button" type="submit">
					Post
				</button>
			</div>
		</form>
	);
}

export default Form;
