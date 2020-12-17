import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleListData from "../components/ArticleListData";
import ShopList from "../components/ShopList";
import MailingList from "../components/MailingList";
import Database from "../modules/Database";
import { Button } from "../components/Button";
import "../App.css";
import "../styles/home.css";

function Home() {
	const [feature, setFeature] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const Data = await Database.GetFeaturedArticle();
			setFeature(Data);
			// console.log("featured article", Data);
		};
		getData();
		return;
	}, []);

	return (
		<div>
			<section className="home-section feature-section">
				<h2>Featured</h2>
				<Link to={`/blog/${feature[0] && feature[0].id}`}>
					<div
						className="feature-section__feat-img"
						style={{
							backgroundImage: `url(${
								feature[0] &&
								feature[0]._embedded["wp:featuredmedia"][0].media_details.sizes
									.full.source_url
							})`,
						}}
					></div>
					<div className="blog-post__text-wrapper">
						<h2 className="blog-post__category">
							{feature[0] && feature[0]._embedded["wp:term"][0][0].name}
						</h2>
						<h1
							className="blog-post__title"
							dangerouslySetInnerHTML={{
								__html: `${feature[0] && feature[0].title.rendered}`,
							}}
						></h1>
						<p
							className="blog-post__excerpt"
							dangerouslySetInnerHTML={{
								__html: `${feature[0] && feature[0].excerpt.rendered}`,
							}}
						></p>
						<Button type="button" buttonStyle="btn__primary--solid">
							Read more
						</Button>
					</div>
				</Link>
			</section>
			<section className="home-section articles-section">
				<h2>Latest Articles</h2>
				<ArticleListData />
			</section>
			<section className="home-section">
				<h2>Shop</h2>
				<ShopList />
			</section>
			<section className="home-section">
				<h2>Latest Products</h2>
			</section>
			<section className="home-section">
				<MailingList />
			</section>
		</div>
	);
}

export default Home;
