import React from "react";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostStuff from "./PostStuff";
import GetStuff from "./GetStuff";
import Item from "./Item"

function App() {
	return (
		<div>
			<Router>
				<div className="App">
					<Route exact path="/" component={Navigation} />
					<Route path="/poststuff" component={PostStuff} />
					<Route path="/getstuff" component={GetStuff} />
					<Route path="/stuff/:id" component={Item} />
				</div>
			</Router>
		</div>
	);
}

export default App;
