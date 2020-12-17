import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/lottie/loader.json";

function ArticleListLoading(Component) {
	return function LoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<div className="loading-container">
				<Lottie animationData={loader} />
			</div>
		);
	};
}

export default ArticleListLoading;
