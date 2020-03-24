import React from "react";
import {
	ListGroup, Image
} from "react-bootstrap";
import { Redirect } from "react-router-dom";

function Stuff(props) {
	
	console.log(props)
	let itemName = props.data.itemName
	let imgUrl = `/image/${props.data.file}`;
	console.log(imgUrl)

	const renderRedirect = () => {
		if (redirect) {
			return <Redirect to={{pathname:`stuff/${props.data._id}`, state:{props}}} />;
		}
	};

	const [redirect, setRedirect] = React.useState(false);
	const handleRedirect = () => setRedirect(true);

	return (
		<div>
			<ListGroup defaultActiveKey="#link1">
				<ListGroup.Item action key={props.data._id} onClick={handleRedirect}>
					{itemName}
					<Image src={imgUrl} className="w-25" />
				</ListGroup.Item>
			</ListGroup>
			{renderRedirect()}
		</div>
	);
}

export default Stuff;
