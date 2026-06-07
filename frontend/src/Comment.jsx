import React from "react";
import { ListGroup } from "react-bootstrap";

function Comment(data){
    console.log(data)
    return (
			<ListGroup defaultActiveKey="#link1" className="mb-sm-1">
				<ListGroup.Item>
						{data.data}
				</ListGroup.Item>
			</ListGroup>
		);
}

export default Comment;