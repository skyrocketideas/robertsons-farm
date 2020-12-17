import React from "react";
import { Button } from "../components/Button";
import { Formik, Field, Form } from "formik";
import "../App.css";

function MailingList() {
	return (
		<div className="mailing-list">
			<section className="mailing-list__intro">
				<h1>Mailing List</h1>
				<h2>Sign up to get the latest updates from Robertson's Farm</h2>
			</section>
			<section className="mailing-list__form">
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						email: "",
					}}
					onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
					}}
				>
					<Form>
						<label htmlFor="firstName">First name</label>
						<Field id="firstName" name="firstName" placeholder="Jane" />

						<label htmlFor="lastName">Last name</label>
						<Field id="lastName" name="lastName" placeholder="Doe" />

						<label htmlFor="email">Email</label>
						<Field
							id="email"
							name="email"
							placeholder="jane@acme.com"
							type="email"
						/>
						<Button buttonStyle="btn__secondary--outline" type="submit">
							Submit
						</Button>
					</Form>
				</Formik>
			</section>
		</div>
	);
}

export default MailingList;
