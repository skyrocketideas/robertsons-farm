import Axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

function ShopList() {
	// fetch data from database
	const spreadsheetID = "1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo";
	const endpoint = `https://spreadsheets.google.com/feeds/list/${spreadsheetID}/1/public/full?alt=json`;
	const [data, setData] = useState({ entry: [] });
	useEffect(() => {
		const fetchData = async () => {
			const result = await Axios(endpoint);
			setData(result.data.feed);
			// console.log("test", result.data.feed.entry);
		};
		fetchData();
	});

	return (
		<ul style={{ listStyle: "none" }} className="shop-list">
			{data.entry.map((item) => (
				<li key={item.id.$t} className="shop-item-container">
					<div className="shop-item">
						<h1 className="shop-item__title">{item.gsx$productname.$t}</h1>
						<h2 className="shop-item__price">{item.gsx$productprice.$t}</h2>
						<img
							src={item.gsx$productimage.$t}
							alt=""
							className="shop-item__feat-img"
						/>
						<h3 className="shop-item__category">
							{item.gsx$productcategory.$t}
						</h3>
					</div>
				</li>
			))}
		</ul>
	);
}

export default ShopList;
