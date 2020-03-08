import React from "react";
import {
	ListGroup
} from "react-bootstrap";

function Stuff(props) {
	
	console.log(props.data.street)
	let itemName = props.data.itemName
	
	return (
		<ListGroup defaultActiveKey="#link1">
			<ListGroup.Item action >
				{itemName}
				{props.data}
			</ListGroup.Item>
		</ListGroup>
	);
}

export default Stuff;
