import React from "react";
import ArticleListData from "../components/ArticleListData";
import "../App.css";
import "../styles/home.css";

function Home() {
	return (
		<div className="testy">
			<section className="home-section feature-section">
				<h2>Featured</h2>
			</section>
			<section className="home-section">
				<h2>Latest Articles</h2>
				<ArticleListData />
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
