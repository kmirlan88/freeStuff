import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import Gmap from "./Map";
import {
	Jumbotron,
	Container,
	Col,
	FormControl,
	ListGroup,
	Image,
	Row
} from "react-bootstrap";
import Comments from "./Comments"

function GetItem(props) {

    let [state, setState] = useState([]);

    useEffect(() => {
        let mounted = true;
        const loadData = async () => {
            const response = await axios.get(
							`${props.match.url}`
                        );
            if (mounted) {
                setState(response.data)
            }
        }
        loadData()
        return () =>  {
            mounted = false;
        }
        }, []);

    console.log("this is Item state:");
    console.log(state);

    let imgUrl = `/image/${state.file}`;
    let itemName = state.itemName;
    let descr = state.descr;
    
    if (state.length == 0){
        console.log("hello")
        return (
                <div>
                    <Navigation />
                </div>
				);
    } else {
        return (
					<div className="Item">
						<Navigation />
						<Container fluid="md" className="mt-sm-5 mb-sm-5">
							<Row>
								<Col></Col>
								<Col>
									<ListGroup defaultActiveKey="#link1">
										<ListGroup.Item>
											<h1>{itemName}</h1>
											<Image src={imgUrl} />
											<h4 className="mt-sm-3">Description:</h4>
											<p style={{ fontSize: 18 }} className="text-info">
												{descr}
											</p>
											<h4>Location:</h4>
											<Gmap data={state} />
											<h4>Comments:</h4>
											<Comments data={state}/>
										</ListGroup.Item>
									</ListGroup>
								</Col>
								<Col></Col>
							</Row>
						</Container>
					</div>
				);
    }
	
}

export default GetItem;
