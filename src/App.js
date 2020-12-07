import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<Footer />
		</div>
	);
}

export default App;
