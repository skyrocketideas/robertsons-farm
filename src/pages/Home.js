import React from "react";
import "../App.css";
import "../styles/home.css";

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<section className="home-section">
				<h2>First Section</h2>
			</section>
			<section className="home-section">
				<h2>Latest Articles</h2>
			</section>
			<section className="home-section">
				<h2>Shop</h2>
			</section>
			<section className="home-section">
				<h2>Latest Products</h2>
			</section>
			<section className="home-section">
				<h2>Mailing List</h2>
			</section>
		</div>
	);
}

export default Home;
