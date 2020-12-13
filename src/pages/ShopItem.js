import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function ShopItem() {
	// fetch data from database
	const spreadsheetID = "1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo";
	const endpoint = `https://spreadsheets.google.com/feeds/list/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full/chk2m?alt=json`;
	const [item, setItem] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const result = await Axios(endpoint);
			setItem(result.data.entry.json);
			console.log("test", item);
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>Shop Item</h1>
			{/* <h2>{item.gsx$productprice.$t}</h2> */}
		</div>
	);
}

export default ShopItem;

// https://spreadsheets.google.com/feeds/list/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full/cre1l
// https://spreadsheets.google.com/feeds/list/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full/chk2m
