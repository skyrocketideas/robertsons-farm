import React from "react";
import { Button } from "../components/Button";
import "../App.css";

function MailingList() {
	return (
		<div>
			<h1>Mailing List</h1>
			<h2>Sign up to get the latest updates from Robertson's Farm</h2>
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
