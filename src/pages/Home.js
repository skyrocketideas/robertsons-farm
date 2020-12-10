import React, { useEffect, useState } from "react";
import ArticleListData from "../components/ArticleListData";
import Database from "../modules/Database";
import "../App.css";
import "../styles/home.css";

function Home() {
	const [feature, setFeature] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const Data = await Database.GetFeaturedArticle();
			setFeature(Data);
			console.log("featured article", Data);
		};
		getData(feature.feature);
		return;
	}, []);

	return (
		<div>
			<section className="home-section feature-section">
				<h2>Featured</h2>
				<h1>{feature[0] && feature[0].written_by}</h1>
				<div
					className="blog-post__feat-img"
					style={{
						backgroundImage: `url(${
							feature[0] &&
							feature[0]._embedded["wp:featuredmedia"][0].media_details.sizes
								.full.source_url
						})`,
					}}
				></div>
			</section>
			<section className="home-section articles-section">
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
