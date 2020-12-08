import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="app-container">
				<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/aboutus" component={About} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
