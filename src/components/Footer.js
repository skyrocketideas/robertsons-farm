import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-section footer-section__site-links">
				<Link to="/shop">Shop</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/about">Our story</Link>
			</section>
			<section className="footer-section footer-section__social-links">
				<a href="https://www.facebook.com/robertsonsfarmandapothecary">
					Facebook
				</a>
				<a href="https://www.instagram.com/robertsonsfarmandapothecary/">
					Instagram
				</a>
			</section>
			<section className="footer-section footer-section__address">
				<address>
					<div>Robertson's Farm & Apothecary</div>
					<div>754 Canaan Mountain Road</div>
					<div>Canaan</div>
					<div>Nova Scotia</div>
					<div>B4N 4K1</div>
					<div>Canada</div>
				</address>
			</section>
			<section className="footer-section footer-section__copyright">
				<p>© Robertson's Farm 2020. All rights reserved</p>
			</section>
		</div>
	);
}

export default Footer;
