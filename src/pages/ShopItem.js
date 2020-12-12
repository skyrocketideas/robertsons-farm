import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function ShopItem() {
	// fetch data from database
	let location = useLocation();
	console.log("hi!!!!!", location.pathname);
	const endpoint = `${location}?alt=json`;
	const [data, setData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const result = await Axios(endpoint);
			setData(result);
			console.log("test", result);
		};
		fetchData();
	});
	return (
		<div>
			<h1>Shop Item</h1>
			<h2>{data}</h2>
		</div>
	);
}

export default ShopItem;

// https://spreadsheets.google.com/feeds/list/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full/cre1l
// https://spreadsheets.google.com/feeds/list/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full/chk2m
