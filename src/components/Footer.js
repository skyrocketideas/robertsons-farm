import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<h1>Footer</h1>
			<Link to="/shop">Shop</Link>
			<Link to="/blog">Blog</Link>
			<Link to="/about">Our story</Link>
			<Link to="/contact">Contact</Link>
			<p>© Robertson's Farm 2020. All rights reserved</p>
		</div>
	);
}

export default Footer;
