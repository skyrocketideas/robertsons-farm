import React, { useEffect, useState } from "react";
import ShopList from "../components/ShopList";
import ArticleListLoading from "./ArticleListLoading";
import "../App.css";

function ShopListData() {
	const ListLoading = ArticleListLoading(ShopList);
	const [shopAppState, setShopAppState] = useState({
		loading: false,
		shopRepos: null,
	});

	useEffect(
		function () {
			setShopAppState({ loading: true });
			const apiUrl =
				"https://spreadsheets.google.com/feeds/cells/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full?alt=json";
			fetch(apiUrl)
				.then((res) => {
					return res.json();
				})
				.then((shopRepos) => {
					// console.log("The data ...", shopRepos);
					setShopAppState({ loading: false, shopRepos: shopRepos });
				});
		},
		[setShopAppState]
	);

	return (
		<div>
			<ListLoading
				isLoading={shopAppState.loading}
				shopRepos={shopAppState.shopRepos}
			/>
		</div>
	);
}

export default ShopListData;
