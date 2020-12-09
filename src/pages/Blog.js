import React from "react";
import Button from "../components/Button";
import ArticleListData from "../components/ArticleListData";
import "../App.css";

function Blog() {
	return (
		<div>
			<h1>Blog</h1>
			<ArticleListData />
			<article className="blog-post">
				<div className="blog-post__feat-img"></div>
				<div className="blog-post__text-wrapper">
					<h2 className="blog-post__category">Category</h2>
					<h1 className="blog-post__title">Title of blog-post</h1>
					<p className="blog-post__excerpt">
						Excerpt Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nulla provident aut ullam dolorum sit impedit fugit similique rerum
						omnis, quod dicta, voluptas eius animi quae reiciendis possimus
						voluptate molestias dolore.
					</p>
					<Button />
				</div>
			</article>
		</div>
	);
}

export default Blog;
