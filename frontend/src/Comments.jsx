import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControl, Form } from "react-bootstrap";
import Comment from "./Comment"


function Comments(data){

    const [state, setState] = React.useState({
            text: ""
        });

    function handleChange(evt) {
			const value = evt.target.value;
			setState({
				...state,
				[evt.target.name]: value
			});
        }
    
    let [comms, setComms] = useState([]);

    const d = () => {
        axios
            .get("/getcomments", {params: data.data})
            .then(res => {
                console.log(res.data);
                setComms(res.data.comments);
            })
            .catch(err => {
                console.log(err);
            });
    };

    function handlePost(event) {
        event.preventDefault();
        state["id"] = data.data._id
        axios
            .post("/comment", state)
            .then(res => {
                setState({text: ""})
                d()
            })
            .catch(err => {
                // handle eror on front;
            });
    }

    let comments = comms.map(obj => {
			return <Comment data={obj} />;
        });
    
    useEffect(() => {
			d();
		}, []);

    return (
			<>
				{comments}
				<Form onSubmit={handlePost}>
					<FormControl
						as="textarea"
						aria-label="With textarea"
						className="mb-sm-3"
						onChange={handleChange}
						value={state.text}
						name="text"
					/>
					<Button type="submit" variant="warning">
						Add comment
					</Button>
				</Form>
			</>
		);
}

export default Comments;