import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

function ShopItem({ match }) {
	// fetch data from database

	const endpoint = `https://spreadsheets.google.com/feeds/list/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full/cre1l`;
	const [data, setData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const result = await Axios(endpoint);
			setData(result);
			console.log("test", result);
		};
		fetchData();
	}, []);
	return (
		<div>
			<h1>Shop Item</h1>
			<h2>{data.status}</h2>
		</div>
	);
}

export default ShopItem;

// http://localhost:3000/shop/https://spreadsheets.google.com/feeds/list/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full/cre1l
// http://localhost:3000/shop/https://spreadsheets.google.com/feeds/list/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full/chk2m
