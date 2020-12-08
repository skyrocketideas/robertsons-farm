import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import ArticleListLoading from "./ArticleListLoading";
import "../App.css";

function ArticleListData() {
	const ListLoading = ArticleListLoading(ArticleList);
	const [appState, setAppState] = useState({
		loading: false,
		repos: null,
	});

	useEffect(
		function () {
			setAppState({ loading: true });
			const apiUrl =
				"https://kokkedalpaavej.dk/blog/wp-json/wp/v2/posts/?_embed&per_page=100";
			fetch(apiUrl)
				.then((res) => {
					return res.json();
				})
				.then((repos) => {
					console.log("The data ...", repos);
					setAppState({ loading: false, repos: repos });
				});
		},
		[setAppState]
	);

	return (
		<div>
			<ListLoading isLoading={appState.loading} repos={appState.repos} />
		</div>
	);
}

export default ArticleListData;
