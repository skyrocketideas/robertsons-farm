import Axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
import "../styles/articleList.css";

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
		<div className="App">
			<header className="App-header">
				<ul style={{ listStyle: "none" }}>
					{data.entry.map((item) => (
						<li key={item.id.$t}>
							<h1>{item.gsx$productname.$t}</h1>
							<h2>{item.gsx$productprice.$t}</h2>
							<img
								src={item.gsx$productimage.$t}
								style={{ width: "200px", height: "auto" }}
								alt=""
							/>
							<h3>{item.gsx$productcategory.$t}</h3>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default ShopList;
