import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/articleList.css";

const ArticleList = function (props) {
	const { repos } = props;
	if (!repos || repos.length === 0) return <p>No repository, sorry.</p>;
	return (
		<ul className="blog-list">
			{repos.map(function (repo) {
				return (
					<li key={repo.id} className="blog-post">
						<Link to={`/blog/${repo.id}`}>
							<div
								className="blog-post__feat-img"
								style={{
									backgroundImage: `url(${repo._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url})`,
								}}
							></div>
							<h2 className="blog-post__category">
								{repo._embedded["wp:term"][0][0].name}
							</h2>
							<h1
								dangerouslySetInnerHTML={{
									__html: `${repo.title.rendered}`,
								}}
							></h1>
							<h3 className="blog-post__author">{repo.written_by}</h3>
							<h4 className="blog_post__date">{repo.date}</h4>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default ArticleList;
