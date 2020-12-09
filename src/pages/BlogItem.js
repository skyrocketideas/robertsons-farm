import React, { useEffect, useState } from "react";
import "../App.css";

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

	return (
		<div>
			<h1>Blog Item</h1>

			<h2 className="blog-post__category">
				{item._embedded && item._embedded["wp:term"][0][0].name}
			</h2>
			<h1 className="blog-post__title">{item.title.rendered}</h1>
			<p
				className="blog-post__excerpt"
				dangerouslySetInnerHTML={{ __html: `${item.excerpt.rendered}` }}
			></p>
			<h3 className="blog-post__author">{item.written_by}</h3>
			<h4 className="blog_post__date">{item.date}</h4>
			<div
				className="blog-post__feat-img"
				style={{
					backgroundImage: `url(${
						item._embedded &&
						item._embedded["wp:featuredmedia"][0].media_details.sizes.full
							.source_url
					})`,
				}}
			></div>
			<div
				className="blog-post__content"
				dangerouslySetInnerHTML={{
					__html: `${item.content.rendered}`,
				}}
			></div>
		</div>
	);
}

export default BlogItem;

// <article className="blog-post">
// 	<div className="blog-post__feat-img"></div>
// 	<div className="blog-post__text-wrapper">
// 		<h2 className="blog-post__category">Category</h2>
// 		<h1 className="blog-post__title">Title of blog-post</h1>
// 		<p className="blog-post__excerpt">
// 			Excerpt Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
// 			provident aut ullam dolorum sit impedit fugit similique rerum omnis, quod
// 			dicta, voluptas eius animi quae reiciendis possimus voluptate molestias
// 			dolore.
// 		</p>
// 		<Button />
// 	</div>
// </article>;
