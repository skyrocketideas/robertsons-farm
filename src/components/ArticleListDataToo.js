import React, { useEffect, useState } from "react";
import ArticleListToo from "../components/ArticleListToo";
import ArticleListLoading from "./ArticleListLoading";
import "../App.css";
import "../styles/articleListToo.css";

function ArticleListDataToo() {
	const ListLoading = ArticleListLoading(ArticleListToo);
	const [appState, setAppState] = useState({
		loading: false,
		repos: null,
	});

	useEffect(
		function () {
			setAppState({ loading: true });
			const apiUrl =
				"https://lovethatwillnotdie.com/wp_robertsons/wp-json/wp/v2/posts/?_embed&sticky=false&per_page=100";
			fetch(apiUrl)
				.then((res) => {
					return res.json();
				})
				.then((repos) => {
					// console.log("The data ...", repos);
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

export default ArticleListDataToo;
