import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "../App.css";
import "../styles/articleList.css";

const ArticleList = function (props) {
	const { repos } = props;
	if (!repos || repos.length === 0) return <p>No repository, sorry.</p>;
	return (
		<ul className="blog-list">
			{repos.map(function (repo) {
				return (
					<li key={repo.id} className="blog-post-container">
						<Link to={`/blog/${repo.id}`}>
							<ScrollAnimation animateIn="fadeUp">
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
										<h4 className="blog-post__date">{repo.date}</h4>
									</div>
								</div>
							</ScrollAnimation>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default ArticleList;
