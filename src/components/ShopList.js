import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/shop.css";

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
	}, []);

	return (
		<ul style={{ listStyle: "none" }} className="shop-list">
			{data.entry.map((item) => (
				<li key={item.id.$t} className="shop-item-container">
					<Link to={`/shop/${item.id.$t}`}>
						<div className="shop-item">
							<div
								className="shop-item__feat-img"
								style={{
									backgroundImage: `url(${item.gsx$productimage.$t})`,
								}}
							></div>
							<h2 className="shop-item__category">
								{item.gsx$productcategory.$t}
							</h2>
							<h1 className="shop-item__title">{item.gsx$productname.$t}</h1>
							<h3 className="shop-item__price">{item.gsx$productprice.$t}</h3>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}

export default ShopList;
