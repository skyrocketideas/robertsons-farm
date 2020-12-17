import React from "react";
import { Button } from "../components/Button";
import { Formik, Field, Form } from "formik";
import "../App.css";
import "../styles/mailingList.css";

function MailingList() {
	return (
		<div className="mailing-list">
			<section className="mailing-list__intro">
				<h4>We're growing! ... Keep your ears to the soil.</h4>
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
						<div className="form-inputs-group">
							<label htmlFor="firstName">First name</label>
							<Field
								id="firstName"
								className="form-field"
								name="firstName"
								placeholder="Jane"
							/>
							<label htmlFor="lastName">Last name</label>
							<Field
								id="lastName"
								className="form-field"
								name="lastName"
								placeholder="Doe"
							/>
							<label htmlFor="email">Email</label>
							<Field
								id="email"
								className="form-field"
								name="email"
								placeholder="jane@acme.com"
								type="email"
							/>
						</div>
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
