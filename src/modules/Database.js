/* API query for feauture sticky post */
const GetFeaturedArticle = async () => {
	const featuredArticle = await fetch(
		"https://lovethatwillnotdie.com/wp_robertsons/wp-json/wp/v2/posts/?_embed&sticky=true"
	);
	const response = await featuredArticle.json();
	return response;
};

const Database = { GetFeaturedArticle };

export default Database;
