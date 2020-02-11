import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PostStuff from "./PostStuff";
import GetStuff from "./GetStuff";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Navbar} />
				<Route path="/poststuff" component={PostStuff} />
				<Route path="/getstuff" component={GetStuff} />
			</div>
		</Router>
	);
}

export default App;
