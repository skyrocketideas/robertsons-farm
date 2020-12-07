import React from "react";
import Button from "./Button";
import "../App.css";

function Header() {
	return (
		<div className="header-container">
			<div className="article">
				<div className="article__feat-img">Image</div>
				<h2 className="article__category">Category</h2>
				<h1 className="article__title">Title</h1>
				<p className="article__excerpt">
					Excerpt Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
					provident aut ullam dolorum sit impedit fugit similique rerum omnis,
					quod dicta, voluptas eius animi quae reiciendis possimus voluptate
					molestias dolore.
				</p>
				<Button />
			</div>
		</div>
	);
}

export default Header;
