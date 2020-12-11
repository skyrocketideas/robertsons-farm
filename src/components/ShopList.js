import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/articleList.css";

const ShopList = function (props) {
	const { shopRepos } = props;
	if (!shopRepos || shopRepos.length === 0)
		return <p>No shop Repository, sorry.</p>;
	return (
		<ul>
			{shopRepos.map(function (shopRepo) {
				return (
					<li>
						<div>
							<h4>{shopRepo}</h4>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default ShopList;
