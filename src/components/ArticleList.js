import React from "react";
import { Link } from "react-router-dom";

const ArticleList = function (props) {
	const { repos } = props;

	if (!repos || repos.length === 0) return <p>No repository, sorry.</p>;
	return (
		<ul>
			{repos.map(function (repo) {
				return (
					<li key={repo.id}>
						<h3
							dangerouslySetInnerHTML={{
								__html: `${repo.title.rendered}`,
							}}
						></h3>
					</li>
				);
			})}
		</ul>
	);
};

export default ArticleList;
