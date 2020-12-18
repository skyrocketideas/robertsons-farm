import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/articleListToo.css";

const ArticleListToo = function (props) {
	const { repos } = props;
	if (!repos || repos.length === 0) return <p>No repository, sorry.</p>;

	return (
		<ul className="blog-list-too">
			{repos.map(function (repo) {
				// convert date to human readable
				const dateString = repo.date;
				const formatDate = (dateString) => {
					const options = { year: "numeric", month: "long", day: "numeric" };
					return new Date(dateString).toLocaleDateString(undefined, options);
				};
				return (
					<li key={repo.id} className="blog-post-container">
						<Link to={`/blog/${repo.id}`}>
							<div className="blog-post">
								<div
									className="blog-post__feat-img"
									style={{
										backgroundImage: `url(${repo._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url})`,
									}}
								></div>
								<div className="blog-post__text-wrapper">
									<h2 className="blog-post__category">
										{repo._embedded["wp:term"][0][0].name}
									</h2>
									<h1
										className="blog-post__title"
										dangerouslySetInnerHTML={{
											__html: `${repo.title.rendered}`,
										}}
									></h1>
									<h3 className="blog-post__author">{repo.written_by}</h3>
									<h4 className="blog-post__date">{formatDate(dateString)}</h4>
								</div>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default ArticleListToo;
