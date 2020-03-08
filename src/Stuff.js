import React from "react";
import {
	ListGroup, Image
} from "react-bootstrap";
import axios from "axios";

function Stuff(props) {
	
	console.log(props.data.filename)
	let itemName = props.data.itemName
	let imgUrl = `http://localhost:3001/image/${props.data.filename}`;
	console.log(imgUrl)
	function handleGetImage(imgUrl){
	axios
			.get(imgUrl)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				// handle eror on front;
			});
	}
	
	return (
		<ListGroup defaultActiveKey="#link1" onClick={handleGetImage(imgUrl)}>
			<ListGroup.Item action>
				{itemName}
				<Image src={imgUrl} fluid />
			</ListGroup.Item>
		</ListGroup>
	);
}

export default Stuff;
