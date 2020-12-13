import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/shop.css";

function ShopList() {
	// fetch data from database
	const endpointRestDB = "https://robertsons-ac10.restdb.io/rest/shop-items";
	const apiKey = "5fd5f88eff9d670638140517";
	const [shopData, setShopData] = useState({ data: [] });
	useEffect(() => {
		const fetchData = async () => {
			const result = await Axios(endpointRestDB, {
				method: "get",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"x-apikey": apiKey,
					"cache-control": "no-cache",
				},
			});
			setShopData(result);
			console.log("Is this the data? ... ", result);
		};
		fetchData();
	}, []);

	return (
		<ul style={{ listStyle: "none" }} className="shop-list">
			{shopData.data.map((item) => (
				<li key={item._id} className="shop-item-container">
					<Link to={`/shop/${item._id}`}>
						{console.log("ITEM ddd", item._id)}
						<div className="shop-item">
							<div
								className="shop-item__feat-img"
								style={{
									backgroundImage: `url(${item.ProductImage})`,
								}}
							></div>
							<h2 className="shop-item__category">{item.ProductCategory}</h2>
							<h1 className="shop-item__title">{item.ProductName}</h1>
							<h3 className="shop-item__price">{item.ProductPrice}</h3>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}

export default ShopList;
