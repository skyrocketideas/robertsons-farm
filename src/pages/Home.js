import React from "react";
import "../App.css";
import "../styles/home.css";
import ArticleListData from "../components/ArticleListData";

function Home() {
	return (
		<div className="testy">
			<h1>Home</h1>
			<ArticleListData />
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
