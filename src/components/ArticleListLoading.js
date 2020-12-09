import React from "react";

function ArticleListLoading(Component) {
	return function LoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return <div className="loading-container">LOADING CONTAINER</div>;
	};
}

export default ArticleListLoading;
