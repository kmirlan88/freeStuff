import React, { useState } from "react";
import {
	ListGroup, Image, Button
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

	const [loaded, setLoaded] = useState(false);

	return (
		<div>
			<ListGroup defaultActiveKey="#link1">
				<ListGroup.Item key={props.data._id}>
					<strong>{itemName}</strong>
					<Button
						variant="warning"
						className="mb-sm-2 float-right"
						onClick={handleRedirect}>
						Open
					</Button>
					<br></br>
					<div className="text-center">
						{loaded ? null : (
							<div
								style={{
									background: `url("dot.gif") no-repeat center`,
									height: 400
								}}
							/>
						)}
						<Image
							src={imgUrl}
							style={loaded ? { width: 600 } : { display: "none" }}
							onLoad={() => setLoaded(true)}
						/>
					</div>
				</ListGroup.Item>
			</ListGroup>
			{renderRedirect()}
		</div>
	);
}

export default Stuff;
