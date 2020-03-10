import React from "react";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostStuff from "./PostStuff";
import GetStuff from "./GetStuff";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Navigation} />
				<Route path="/poststuff" component={PostStuff} />
				<Route path="/getstuff" component={GetStuff} />
			</div>
		</Router>
	);
}

export default App;
