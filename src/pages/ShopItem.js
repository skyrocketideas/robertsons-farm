import React, { useEffect, useState } from "react";
import "../App.css";
import "../styles/shopItem.css";

function ShopItem({ match }) {
	// fetch data from database
	const endpointRestDB = `https://robertsons-ac10.restdb.io/rest/shop-items/${match.params.id}`;
	const imgEndpoint = `https://robertsons-ac10.restdb.io/media/shop-items/${match.params.id}`;
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
		<article className="shop-single-item">
			<div
				className="shop-single-item__feat-img"
				style={{
					backgroundImage: `url(${item.ProductImage})`,
				}}
			></div>
			<div className="shop-single-item__info">
				<h1>{item.ProductName}</h1>
				<h2>{item.ProductCategory}</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
					consequatur unde atque non laudantium, recusandae expedita omnis vero
					autem quas libero ipsam vitae voluptatum modi sequi quia odio
					distinctio perspiciatis. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Alias placeat impedit quae corporis exercitationem
					nemo sint repudiandae magni repellendus voluptatem a nostrum corrupti
					iste aspernatur fuga nobis delectus, doloribus unde. Lorem ipsum dolor
					sit amet, consectetur adipisicing elit. Eius, asperiores atque? Earum
					recusandae aut pariatur, cum ut ab ducimus culpa numquam doloremque
					sunt, debitis porro fugit, architecto dolor sequi quo.
				</p>
			</div>
		</article>
	);
}

export default ShopItem;
