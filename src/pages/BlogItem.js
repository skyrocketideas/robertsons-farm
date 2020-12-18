import React, { useEffect, useState } from "react";
import "../App.css";
import "../styles/blogItem.css";

function BlogItem({ match }) {
	useEffect(function () {
		fetchItem();
		// eslint-disable-next-line
	}, []);

	const [item, setItem] = useState({
		title: {},
		excerpt: {},
		category: {},
		content: {},
	});

	const fetchItem = async function () {
		const fetchItem = await fetch(
			`https://lovethatwillnotdie.com/wp_robertsons/wp-json/wp/v2/posts/${match.params.id}?_embed`
		);
		// console.log("single item", fetchItem);
		const item = await fetchItem.json();
		setItem(item);
	};

	// convert date to human readable
	const dateString = item.date;
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<article className="blog-post-item">
			<div className="blog-post-item__intro">
				<h2 className="blog-post-item__category">
					{item._embedded && item._embedded["wp:term"][0][0].name}
				</h2>
				<h1 className="blog-post-item__title">{item.title.rendered}</h1>
				<p
					className="blog-post-item__excerpt"
					dangerouslySetInnerHTML={{ __html: `${item.excerpt.rendered}` }}
				></p>
				<h3 className="blog-post-item__author">written by {item.written_by}</h3>
				<h4 className="blog-post-item__date">{formatDate(dateString)}</h4>
			</div>
			<div
				className="blog-post-item__feat-img"
				style={{
					backgroundImage: `url(${
						item._embedded &&
						item._embedded["wp:featuredmedia"][0].media_details.sizes.full
							.source_url
					})`,
				}}
			></div>
			<div
				className="blog-post-item__content"
				dangerouslySetInnerHTML={{
					__html: `${item.content.rendered}`,
				}}
			></div>
		</article>
	);
}

export default BlogItem;
