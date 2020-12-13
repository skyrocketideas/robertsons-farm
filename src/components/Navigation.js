import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/navigation.css";

function Navigation() {
	return (
		<div className="nav-container">
			<Navbar collapseOnSelect bg="light" expand="lg">
				<Navbar.Brand
					eventKey="1"
					as={Link}
					className="navbar__link"
					activeClassName="navbar__link--active"
					to="/"
				>
					Farm Logo
				</Navbar.Brand>
				<Navbar.Toggle
					className="navbar__toggle"
					aria-controls="basic-navbar-nav"
				></Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link
							eventKey="2"
							as={Link}
							className="navbar__link"
							activeClassName="navbar__link--active"
							to="/about"
						>
							About
						</Nav.Link>
						<Nav.Link
							eventKey="3"
							as={Link}
							className="navbar__link"
							activeClassName="navbar__link--active"
							to="/contact"
						>
							Contact
						</Nav.Link>
						<Nav.Link
							eventKey="4"
							as={Link}
							className="navbar__link"
							activeClassName="navbar__link--active"
							to="/blog"
						>
							Blog
						</Nav.Link>
						<Nav.Link
							eventKey="5"
							as={Link}
							className="navbar__link"
							activeClassName="navbar__link--active"
							to="/shop"
						>
							Shop
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Navigation;
