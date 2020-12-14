import React from "react";
import "../App.css";
import "../styles/button.css";

const styles = ["btn__primary--solid", "btn__secondary--outline"];

export const Button = ({ children, type, onClick, buttonStyle }) => {
	const checkButtonStyle = styles.includes(buttonStyle)
		? buttonStyle
		: styles[0];

	return (
		<div>
			<button
				onClick={onClick}
				className={`btn ${checkButtonStyle}`}
				type={type}
			>
				{children}
			</button>
		</div>
	);
};
