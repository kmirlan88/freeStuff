import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import Gmap from "./Map";
import {
	Jumbotron,
	Container,
	Col,
	FormControl,
	FormGroup,
	Image,
	Row
} from "react-bootstrap";

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
						<Container fluid="md">
							<Row>
								<Col></Col>
								<Col>
									<h1>{itemName}</h1>
								</Col>
								<Col></Col>
							</Row>
							<Row>
								<Col></Col>
								<Col>
									<Image src={imgUrl} />
								</Col>
								<Col></Col>
							</Row>
							<Row>
								<Col></Col>
								<Col>
									<h4>Description:</h4>
									<p style={{ fontSize: 24 }}>{descr}</p>
								</Col>
								<Col></Col>
							</Row>
							<Row>
								<Col></Col>
								<Col>
									<h4>Location:</h4>
									<Gmap data={state} />
								</Col>
								<Col></Col>
							</Row>
						</Container>
					</div>
				);
    }
	
}

export default GetItem;
