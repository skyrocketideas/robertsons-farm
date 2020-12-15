import React from "react";
import { Button } from "../components/Button";
import "../App.css";

function MailingList() {
	return (
		<div className="mailing-list">
			<section className="mailing-list__intro">
				<h1>Mailing List</h1>
				<h2>Sign up to get the latest updates from Robertson's Farm</h2>
			</section>
			<section className="mailing-list__form">
				<form action="" className="mailing-list__form__inputs">
					<label htmlFor="first name">First name</label>
					<input
						type="text"
						name="first name"
						placeholder="First name"
						required
					/>
					<label htmlFor="last name">Last name</label>
					<input
						type="text"
						name="last name"
						placeholder="Last name"
						required
					/>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" placeholder="Email" required />
				</form>
			</section>
			<Button
				onClick=""
				buttonStyle="btn__secondary--outline"
				type="button"
				value="send"
			>
				Sign Up
			</Button>
		</div>
	);
}

export default MailingList;
