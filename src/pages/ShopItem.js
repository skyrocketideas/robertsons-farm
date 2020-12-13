import React, { useEffect, useState } from "react";
import "../App.css";

function ShopItem({ match }) {
	// fetch data from database
	const endpointRestDB = `https://robertsons-ac10.restdb.io/rest/shop-items/${match.params.id}`;
	const apiKey = "5fd5f88eff9d670638140517";

	useEffect(function () {
		fetchItem();
		// eslint-disable-next-line
	}, []);

	const [item, setItem] = useState({});

	const fetchItem = async function () {
		const fetchItem = await fetch(endpointRestDB, {
			method: "get",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"x-apikey": apiKey,
				"cache-control": "no-cache",
			},
		});
		const item = await fetchItem.json();
		setItem(item);
	};

	return (
		<div>
			<h1>Shop Item</h1>
			<h2>{item.ProductName}</h2>
			<h2>{item.ProductCategory}</h2>
			<div
				className="blog-post__feat-img"
				style={{
					backgroundImage: `url(${item.ProductImage})`,
				}}
			></div>
		</div>
	);
}

export default ShopItem;
