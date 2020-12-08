import React, { useEffect, useState } from "react";
import "../App.css";

function ArticleList() {
	useEffect(function () {
		const apiUrl =
			"https://kokkedalpaavej.dk/blog/wp-json/wp/v2/posts/?_embed&per_page=100";
		fetch(apiUrl)
			.then((res) => {
				return res.json();
			})
			.then((repos) => {
				console.log("The data ...", repos);
			});
	});
	return (
		<div>
			<h1>Test</h1>
		</div>
	);
}

export default ArticleList;
