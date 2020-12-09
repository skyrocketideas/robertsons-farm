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
		const item = await fetchItem.json();
		setItem(item);
	};

	return (
		<div>
			<h1>Blog Item</h1>
		</div>
	);
}

export default BlogItem;
